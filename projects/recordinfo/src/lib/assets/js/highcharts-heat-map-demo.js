var data = {
	"14-28列": {
		"a01-01-a": 1,
		"a01-01-b": 1,
		"a01-02-a": 1,
		"a01-02-b": 1,
		"a01-03-a": 1,
		"a01-03-b": 1,
		"a01-04-a": 1,
		"a01-04-b": 1,
		"a01-05-a": 1,
		"a01-05-b": 1,
		"a01-06-a": 1,
		"a01-06-b": 0,
		"a01-07-a": 0,
		"a01-07-b": 0,
		"a01-08-a": 0
	},
	"29-44列": {
		"a01-01-a": 1,
		"a01-01-b": 1,
		"a01-02-a": 1,
		"a01-02-b": 1,
		"a01-03-a": 1,
		"a01-03-b": 1,
		"a01-04-a": 1,
		"a01-04-b": 1,
		"a01-05-a": 1,
		"a01-05-b": 1,
		"a01-06-a": 1
	},
	"45-68列": {
		"a01-01-a": 1,
		"a01-01-b": 1,
		"a01-02-a": 1,
		"a01-02-b": 1,
		"a01-03-a": 1,
		"a01-03-b": 1,
		"a01-04-a": 1,
		"a01-04-b": 1,
	},
};
var points = [],
	region_p,
	region_val,
	region_i,
	country_p,
	country_i,
	cause_p,
	cause_i,
	cause_name = [];
cause_name['Communicable & other Group I'] = 'Communicable diseases';
cause_name['Noncommunicable diseases'] = 'Non-communicable diseases';
cause_name['Injuries'] = 'Injuries';
region_i = 0;
for (var region in data) {
	region_val = 0;
	region_p = {
		id: "id_" + region_i,
		name: region,
		// color: Highcharts.getOptions().colors[region_i]
	};
	country_i = 0;
	for (var country in data[region]) {
		country_p = {
			id: region_p.id + "_" + country_i,
			name: country,
			parent: region_p.id,
			color:Highcharts.getOptions().colors[Math.round(+data[region][country])],
			value: 1
		};
		points.push(country_p);
		region_val += country_p.value;
		country_i++;
	}
	region_p.value = Math.round(region_val / country_i);
	points.push(region_p);
	region_i++;
}
function levelOne(parent, children) {
	childrenAreas = [];
	Highcharts.each(children, function(child,i) {
		childrenAreas.push({
			x: i*100,
			y: 1,
			width: 100,
			height: 100
		});
	});
	return childrenAreas;
};
function LevelTwo(parent, children) {
	childrenAreas = [];
	Highcharts.each(children, function(child,i) {
		var y = Math.ceil((i+1)/5) - 1
		var x = parseInt(i%5)
		childrenAreas.push({
			x: x*15 + 2,
			y: y*20 + 2,
			width: 15,
			height: 20
		});
	});
	return childrenAreas;
};
Highcharts.seriesTypes.treemap.prototype.levelOne = levelOne;
Highcharts.seriesTypes.treemap.prototype.LevelTwo = LevelTwo;
var chart = new Highcharts.Chart({
	chart: {
		renderTo: 'container'
	},
	series: [{
		type: "treemap",
		allowDrillToNode: true,
		dataLabels: {
			enabled: false
		},
		levelIsConstant: true,
		levels: [{
			level: 1,
			dataLabels: {
				enabled: true
			},
			layoutAlgorithm: 'levelOne',
			borderWidth: 15
		},{
			level:2,
			layoutAlgorithm: 'LevelTwo',
			dataLabels: {
				enabled: true
			},
			borderWidth: 3
		}],
		data: points
	}],
	subtitle: {
		text: '点击下钻. 数据来源: <a href="https://apps.who.int/gho/data/node.main.12?lang=en">WHO</a>.'
	},
	title: {
		text: '2012年，全球每10w人口死亡率'
	}
});