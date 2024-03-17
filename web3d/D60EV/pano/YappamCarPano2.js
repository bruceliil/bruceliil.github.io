

//开始之前先确定 内饰颜色，当选择内饰颜色的时候 需要 重新加载跟内饰颜色相关的物体
//开始之前先确定 变速箱 ，水转印需要根据变速箱进行选择
//最后得出座椅
function carTypeSelect_pano2(value)
{

	//顶内饰格调
	var familyCode = value.substring(0, 3);
	if(familyCode == "S35")
	{
		var tianchuang_Code = "";
		if(_M49_code == "M49A"&&value == "S35S")
		{
			tianchuang_Code = "M49A_S35S";
		}
		else if(_M49_code == "M49A"&&value == "S35U")
		{
			tianchuang_Code = "M49A_S35U";
		}
		else if(_M49_code == "M49A"&&value == "S35X")
		{
			tianchuang_Code = "M49A_S35X";
		}
		else if(_M49_code == "M49B"&&value == "S35S")
		{
			tianchuang_Code = "M49B_S35S";
		}
		else if(_M49_code == "M49B"&&value == "S35X")
		{
			tianchuang_Code = "M49B_S35X";
		}
		else if(_M49_code == "M49B"&&value == "S35U")
		{
			tianchuang_Code = "M49B_S35U";
		}
		else if(_M49_S35_url == _rootIntURL+"pano/dt_pano/panos_2/"+tianchuang_Code+"/"+tianchuang_Code+"_f.png")
		{
			// return ;
		}
		else{

			return ;
		}


		if(_M49_S35_url == _rootIntURL+"pano/dt_pano/panos_2/"+tianchuang_Code+"/"+tianchuang_Code+"_f.png")
		{
			return ;
		}

		_M49_S35_url = _rootIntURL+"pano/dt_pano/panos_2/"+tianchuang_Code+"/"+tianchuang_Code+"_f.png";
		_M49_S35_code = value;
		_M49_S35_id = 0;
		_M49_S35_num++;
		_M49_S35_num = _M49_S35_num%2;
		_M49_S35_Total = 5;

		if(tianchuang_Code == "M49B_S35U")
		{
			_krpano.set("hotspot["+"M49_S35_"+0+"_1"+"].url","");
			_krpano.set("hotspot["+"M49_S35_"+0+"_2"+"].url","");
			_krpano.set("hotspot["+"M49_S35_"+0+"_3"+"].url","");
			_krpano.set("hotspot["+"M49_S35_"+0+"_4"+"].url","");
			_krpano.set("hotspot["+"M49_S35_"+0+"_5"+"].url","");

			_krpano.set("hotspot["+"M49_S35_"+1+"_1"+"].url","");
			_krpano.set("hotspot["+"M49_S35_"+1+"_2"+"].url","");
			_krpano.set("hotspot["+"M49_S35_"+1+"_3"+"].url","");
			_krpano.set("hotspot["+"M49_S35_"+1+"_4"+"].url","");
			_krpano.set("hotspot["+"M49_S35_"+1+"_5"+"].url","");
		}

		if(tianchuang_Code == "M49A_S35S"||tianchuang_Code == "M49A_S35U"||tianchuang_Code == "M49A_S35X")
		{

			var hotspotDataObj = {};
			hotspotDataObj.url = _rootIntURL+"pano/dt_pano/panos_2/"+tianchuang_Code+"/"+tianchuang_Code+"_f.png";
			hotspotDataObj.ath = 0;
			hotspotDataObj.atv = 0;
			hotspotDataObj.width = 1000;
			hotspotDataObj.height = 1000;
			hotspotDataObj.ox = -500;
			hotspotDataObj.oy = -500;
			// hotspotDataObj.alpha = 1;
			hotspotDataObj.name = "M49_S35_"+_M49_S35_num+"_1";
			hotspotDataObj.onloaded = M49_S35Com;
			setHotspotData(hotspotDataObj);

			var hotspotDataObj_1 = {};
			hotspotDataObj_1.url = _rootIntURL+"pano/dt_pano/panos_2/"+tianchuang_Code+"/"+tianchuang_Code+"_l.png";
			hotspotDataObj_1.ath = -90;
			hotspotDataObj_1.atv = 0;
			hotspotDataObj_1.width = 1000;
			hotspotDataObj_1.height = 597.65625;
			hotspotDataObj_1.ox = -500;
			hotspotDataObj_1.oy = -500;
			// hotspotDataObj_1.alpha = 1;
			hotspotDataObj_1.name = "M49_S35_"+_M49_S35_num+"_2";
			hotspotDataObj_1.onloaded = M49_S35Com;
			setHotspotData(hotspotDataObj_1);

			var hotspotDataObj_2 = {};
			hotspotDataObj_2.url = _rootIntURL+"pano/dt_pano/panos_2/"+tianchuang_Code+"/"+tianchuang_Code+"_r.png";
			hotspotDataObj_2.ath = 90;
			hotspotDataObj_2.atv = 0;
			hotspotDataObj_2.width = 1000;
			hotspotDataObj_2.height = 597.65625;
			hotspotDataObj_2.ox = -500;
			hotspotDataObj_2.oy = -500;
			// hotspotDataObj_2.alpha = 1;
			hotspotDataObj_2.name = "M49_S35_"+_M49_S35_num+"_3";
			hotspotDataObj_2.onloaded = M49_S35Com;
			setHotspotData(hotspotDataObj_2);

			var hotspotDataObj_3 = {};
			hotspotDataObj_3.url = _rootIntURL+"pano/dt_pano/panos_2/"+tianchuang_Code+"/"+tianchuang_Code+"_b.png";
			hotspotDataObj_3.ath = 180;
			hotspotDataObj_3.atv = 0;
			hotspotDataObj_3.width = 1000;
			hotspotDataObj_3.height = 537.109375;
			hotspotDataObj_3.ox = -500;
			hotspotDataObj_3.oy = -500;
			// hotspotDataObj_3.alpha = 1;
			hotspotDataObj_3.name = "M49_S35_"+_M49_S35_num+"_4";
			hotspotDataObj_3.onloaded = M49_S35Com;
			setHotspotData(hotspotDataObj_3);

			var hotspotDataObj_4 = {};
			hotspotDataObj_4.url = _rootIntURL+"pano/dt_pano/panos_2/"+tianchuang_Code+"/"+tianchuang_Code+"_u.png";
			hotspotDataObj_4.ath = 0;
			hotspotDataObj_4.atv = -90;
			hotspotDataObj_4.width = 1000;
			hotspotDataObj_4.height = 1000;
			hotspotDataObj_4.ox = -500;
			hotspotDataObj_4.oy = -500;
			// hotspotDataObj_4.alpha = 1;
			hotspotDataObj_4.name = "M49_S35_"+_M49_S35_num+"_5";
			hotspotDataObj_4.onloaded = M49_S35Com;
			setHotspotData(hotspotDataObj_4);
		}
		if(tianchuang_Code == "M49B_S35S")
		{

			var hotspotDataObj = {};
			hotspotDataObj.url = _rootIntURL+"pano/dt_pano/panos_2/"+tianchuang_Code+"/"+tianchuang_Code+"_f.png";
			hotspotDataObj.ath = 0;
			hotspotDataObj.atv = 0;
			hotspotDataObj.width = 1000;
			hotspotDataObj.height = 1000;
			hotspotDataObj.ox = -500;
			hotspotDataObj.oy = -500;
			// hotspotDataObj.alpha = 1;
			hotspotDataObj.name = "M49_S35_"+_M49_S35_num+"_1";
			hotspotDataObj.onloaded = M49_S35Com;
			setHotspotData(hotspotDataObj);

			var hotspotDataObj_1 = {};
			hotspotDataObj_1.url = _rootIntURL+"pano/dt_pano/panos_2/"+tianchuang_Code+"/"+tianchuang_Code+"_l.png";
			hotspotDataObj_1.ath = -90;
			hotspotDataObj_1.atv = 0;
			hotspotDataObj_1.width = 1000;
			hotspotDataObj_1.height = 304.296875;
			hotspotDataObj_1.ox = -500;
			hotspotDataObj_1.oy = -500;
			// hotspotDataObj_1.alpha = 1;
			hotspotDataObj_1.name = "M49_S35_"+_M49_S35_num+"_2";
			hotspotDataObj_1.onloaded = M49_S35Com;
			setHotspotData(hotspotDataObj_1);

			var hotspotDataObj_2 = {};
			hotspotDataObj_2.url = _rootIntURL+"pano/dt_pano/panos_2/"+tianchuang_Code+"/"+tianchuang_Code+"_r.png";
			hotspotDataObj_2.ath = 90;
			hotspotDataObj_2.atv = 0;
			hotspotDataObj_2.width = 1000;
			hotspotDataObj_2.height = 304.296875;
			hotspotDataObj_2.ox = -500;
			hotspotDataObj_2.oy = -500;
			// hotspotDataObj_2.alpha = 1;
			hotspotDataObj_2.name = "M49_S35_"+_M49_S35_num+"_3";
			hotspotDataObj_2.onloaded = M49_S35Com;
			setHotspotData(hotspotDataObj_2);

			var hotspotDataObj_3 = {};
			hotspotDataObj_3.url = _rootIntURL+"pano/dt_pano/panos_2/"+tianchuang_Code+"/"+tianchuang_Code+"_b.png";
			hotspotDataObj_3.ath = 180;
			hotspotDataObj_3.atv = 0;
			hotspotDataObj_3.width = 1000;
			hotspotDataObj_3.height = 375.390625;
			hotspotDataObj_3.ox = -500;
			hotspotDataObj_3.oy = -500;
			// hotspotDataObj_3.alpha = 1;
			hotspotDataObj_3.name = "M49_S35_"+_M49_S35_num+"_4";
			hotspotDataObj_3.onloaded = M49_S35Com;
			setHotspotData(hotspotDataObj_3);

			var hotspotDataObj_4 = {};
			hotspotDataObj_4.url = _rootIntURL+"pano/dt_pano/panos_2/"+tianchuang_Code+"/"+tianchuang_Code+"_u.png";
			hotspotDataObj_4.ath = 0;
			hotspotDataObj_4.atv = -90;
			hotspotDataObj_4.width = 1000;
			hotspotDataObj_4.height = 1000;
			hotspotDataObj_4.ox = -500;
			hotspotDataObj_4.oy = -500;
			// hotspotDataObj_4.alpha = 1;
			hotspotDataObj_4.name = "M49_S35_"+_M49_S35_num+"_5";
			hotspotDataObj_4.onloaded = M49_S35Com;
			setHotspotData(hotspotDataObj_4);
		}
		if(tianchuang_Code == "M49B_S35X")
		{

			var hotspotDataObj = {};
			hotspotDataObj.url = _rootIntURL+"pano/dt_pano/panos_2/"+tianchuang_Code+"/"+tianchuang_Code+"_f.png";
			hotspotDataObj.ath = 0;
			hotspotDataObj.atv = 0;
			hotspotDataObj.width = 1000;
			hotspotDataObj.height = 421.484375;
			hotspotDataObj.ox = -500;
			hotspotDataObj.oy = -500;
			// hotspotDataObj.alpha = 1;
			hotspotDataObj.name = "M49_S35_"+_M49_S35_num+"_1";
			hotspotDataObj.onloaded = M49_S35Com;
			setHotspotData(hotspotDataObj);

			var hotspotDataObj_1 = {};
			hotspotDataObj_1.url = _rootIntURL+"pano/dt_pano/panos_2/"+tianchuang_Code+"/"+tianchuang_Code+"_l.png";
			hotspotDataObj_1.ath = -90;
			hotspotDataObj_1.atv = 0;
			hotspotDataObj_1.width = 1000;
			hotspotDataObj_1.height = 303.515625;
			hotspotDataObj_1.ox = -500;
			hotspotDataObj_1.oy = -500;
			// hotspotDataObj_1.alpha = 1;
			hotspotDataObj_1.name = "M49_S35_"+_M49_S35_num+"_2";
			hotspotDataObj_1.onloaded = M49_S35Com;
			setHotspotData(hotspotDataObj_1);

			var hotspotDataObj_2 = {};
			hotspotDataObj_2.url = _rootIntURL+"pano/dt_pano/panos_2/"+tianchuang_Code+"/"+tianchuang_Code+"_r.png";
			hotspotDataObj_2.ath = 90;
			hotspotDataObj_2.atv = 0;
			hotspotDataObj_2.width = 1000;
			hotspotDataObj_2.height = 303.515625;
			hotspotDataObj_2.ox = -500;
			hotspotDataObj_2.oy = -500;
			// hotspotDataObj_2.alpha = 1;
			hotspotDataObj_2.name = "M49_S35_"+_M49_S35_num+"_3";
			hotspotDataObj_2.onloaded = M49_S35Com;
			setHotspotData(hotspotDataObj_2);

			var hotspotDataObj_3 = {};
			hotspotDataObj_3.url = _rootIntURL+"pano/dt_pano/panos_2/"+tianchuang_Code+"/"+tianchuang_Code+"_b.png";
			hotspotDataObj_3.ath = 180;
			hotspotDataObj_3.atv = 0;
			hotspotDataObj_3.width = 1000;
			hotspotDataObj_3.height = 375.390625;
			hotspotDataObj_3.ox = -500;
			hotspotDataObj_3.oy = -500;
			// hotspotDataObj_3.alpha = 1;
			hotspotDataObj_3.name = "M49_S35_"+_M49_S35_num+"_4";
			hotspotDataObj_3.onloaded = M49_S35Com;
			setHotspotData(hotspotDataObj_3);

			var hotspotDataObj_4 = {};
			hotspotDataObj_4.url = _rootIntURL+"pano/dt_pano/panos_2/"+tianchuang_Code+"/"+tianchuang_Code+"_u.png";
			hotspotDataObj_4.ath = 0;
			hotspotDataObj_4.atv = -90;
			hotspotDataObj_4.width = 1000;
			hotspotDataObj_4.height = 1000;
			hotspotDataObj_4.ox = -500;
			hotspotDataObj_4.oy = -500;
			// hotspotDataObj_4.alpha = 1;
			hotspotDataObj_4.name = "M49_S35_"+_M49_S35_num+"_5";
			hotspotDataObj_4.onloaded = M49_S35Com;
			setHotspotData(hotspotDataObj_4);
		}

	}


	//前两排座椅
	if(value.substring(0, 3) == "A35" && value.split('_').length==3 && value.split('_')[1].substring(0, 3) == "N06")
	{
		
		if(_A35_N06_N50_url == _rootIntURL+"pano/dt_pano/panos_2/zuoyi/"+value+"/"+value+"_f.png")
		{
			return ;
		}
		

		_A35_N06_N50_url = _rootIntURL+"pano/dt_pano/panos_2/zuoyi/"+value+"/"+value+"_f.png";
		_A35_N06_N50_code = value;
		_A35_N06_N50_id = 0;
		_A35_N06_N50_num++;
		_A35_N06_N50_num = _A35_N06_N50_num%2;
		_A35_N06_N50_Total = 5;

		if(_N06_code == "N06F"||_N06_code == "N06L")
		{
			var hotspotDataObj = {};
			hotspotDataObj.url = _rootIntURL+"pano/dt_pano/panos_2/zuoyi/"+value+"/"+value+"_f.png";
			hotspotDataObj.ath = 0;
			hotspotDataObj.atv = 0;
			hotspotDataObj.width = 1000;
			hotspotDataObj.height = 735.9375;
			hotspotDataObj.ox = -500+0.2;
			hotspotDataObj.oy = -235.9375+0.2;
			hotspotDataObj.alpha = 1;
			hotspotDataObj.name = "A35_N06_N50_"+_A35_N06_N50_num+"_1";
			hotspotDataObj.onloaded = A35_N06_N50Com;
			setHotspotData(hotspotDataObj);

			var hotspotDataObj_1 = {};
			hotspotDataObj_1.url = _rootIntURL+"pano/dt_pano/panos_2/zuoyi/"+value+"/"+value+"_l.png";
			hotspotDataObj_1.ath = -90;
			hotspotDataObj_1.atv = 0;
			hotspotDataObj_1.width = 1000;
			hotspotDataObj_1.height = 697.265625;
			hotspotDataObj_1.ox = -500+0.2;
			hotspotDataObj_1.oy = -197.265625+0.2;
			hotspotDataObj_1.alpha = 1;
			hotspotDataObj_1.name = "A35_N06_N50_"+_A35_N06_N50_num+"_2";
			hotspotDataObj_1.onloaded = A35_N06_N50Com;
			setHotspotData(hotspotDataObj_1);

			var hotspotDataObj_2 = {};
			hotspotDataObj_2.url = _rootIntURL+"pano/dt_pano/panos_2/zuoyi/"+value+"/"+value+"_r.png";
			hotspotDataObj_2.ath = 90;
			hotspotDataObj_2.atv = 0;
			hotspotDataObj_2.width = 1000;
			hotspotDataObj_2.height = 697.265625;
			hotspotDataObj_2.ox = -500+0.2;
			hotspotDataObj_2.oy = -197.265625+0.2;
			hotspotDataObj_2.alpha = 1;
			hotspotDataObj_2.name = "A35_N06_N50_"+_A35_N06_N50_num+"_3";
			hotspotDataObj_2.onloaded = A35_N06_N50Com;
			setHotspotData(hotspotDataObj_2);

			var hotspotDataObj_3 = {};
			hotspotDataObj_3.url = _rootIntURL+"pano/dt_pano/panos_2/zuoyi/"+value+"/"+value+"_b.png";
			hotspotDataObj_3.ath = 180;
			hotspotDataObj_3.atv = 0;
			hotspotDataObj_3.width = 1000;
			hotspotDataObj_3.height = 700.78125;
			hotspotDataObj_3.ox = -500+0.2;
			hotspotDataObj_3.oy = -200.78125+0.2;
			hotspotDataObj_3.alpha = 1;
			hotspotDataObj_3.name = "A35_N06_N50_"+_A35_N06_N50_num+"_4";
			hotspotDataObj_3.onloaded = A35_N06_N50Com;
			setHotspotData(hotspotDataObj_3);

			var hotspotDataObj_4 = {};
			hotspotDataObj_4.url = _rootIntURL+"pano/dt_pano/panos_2/zuoyi/"+value+"/"+value+"_d.png";
			hotspotDataObj_4.ath = 0;
			hotspotDataObj_4.atv = 90;
			hotspotDataObj_4.width = 1000;
			hotspotDataObj_4.height = 1000;
			hotspotDataObj_4.ox = -500+0.2;
			hotspotDataObj_4.oy = -500+0.2;
			hotspotDataObj_4.alpha = 1;
			hotspotDataObj_4.name = "A35_N06_N50_"+_A35_N06_N50_num+"_5";
			hotspotDataObj_4.onloaded = A35_N06_N50Com;
			setHotspotData(hotspotDataObj_4);
		}
		if(_N06_code == "N06N")
		{
			var hotspotDataObj = {};
			hotspotDataObj.url = _rootIntURL+"pano/dt_pano/panos_2/zuoyi/"+value+"/"+value+"_f.png";
			hotspotDataObj.ath = 0;
			hotspotDataObj.atv = 0;
			hotspotDataObj.width = 1000;
			hotspotDataObj.height = 735.9375;
			hotspotDataObj.ox = -500+0.2;
			hotspotDataObj.oy = -235.9375+0.2;
			hotspotDataObj.alpha = 1;
			hotspotDataObj.name = "A35_N06_N50_"+_A35_N06_N50_num+"_1";
			hotspotDataObj.onloaded = A35_N06_N50Com;
			setHotspotData(hotspotDataObj);

			var hotspotDataObj_1 = {};
			hotspotDataObj_1.url = _rootIntURL+"pano/dt_pano/panos_2/zuoyi/"+value+"/"+value+"_l.png";
			hotspotDataObj_1.ath = -90;
			hotspotDataObj_1.atv = 0;
			hotspotDataObj_1.width = 1000;
			hotspotDataObj_1.height = 872.265625;
			hotspotDataObj_1.ox = -500+0.2;
			hotspotDataObj_1.oy = -372.265625+0.2;
			hotspotDataObj_1.alpha = 1;
			hotspotDataObj_1.name = "A35_N06_N50_"+_A35_N06_N50_num+"_2";
			hotspotDataObj_1.onloaded = A35_N06_N50Com;
			setHotspotData(hotspotDataObj_1);

			var hotspotDataObj_2 = {};
			hotspotDataObj_2.url = _rootIntURL+"pano/dt_pano/panos_2/zuoyi/"+value+"/"+value+"_r.png";
			hotspotDataObj_2.ath = 90;
			hotspotDataObj_2.atv = 0;
			hotspotDataObj_2.width = 1000;
			hotspotDataObj_2.height = 872.265625;
			hotspotDataObj_2.ox = -500+0.2;
			hotspotDataObj_2.oy = -372.265625+0.2;
			hotspotDataObj_2.alpha = 1;
			hotspotDataObj_2.name = "A35_N06_N50_"+_A35_N06_N50_num+"_3";
			hotspotDataObj_2.onloaded = A35_N06_N50Com;
			setHotspotData(hotspotDataObj_2);

			var hotspotDataObj_3 = {};
			hotspotDataObj_3.url = _rootIntURL+"pano/dt_pano/panos_2/zuoyi/"+value+"/"+value+"_b.png";
			hotspotDataObj_3.ath = 180;
			hotspotDataObj_3.atv = 0;
			hotspotDataObj_3.width = 1000;
			hotspotDataObj_3.height = 872.265625;
			hotspotDataObj_3.ox = -500+0.2;
			hotspotDataObj_3.oy = -372.265625+0.2;
			hotspotDataObj_3.alpha = 1;
			hotspotDataObj_3.name = "A35_N06_N50_"+_A35_N06_N50_num+"_4";
			hotspotDataObj_3.onloaded = A35_N06_N50Com;
			setHotspotData(hotspotDataObj_3);

			var hotspotDataObj_4 = {};
			hotspotDataObj_4.url = _rootIntURL+"pano/dt_pano/panos_2/zuoyi/"+value+"/"+value+"_d.png";
			hotspotDataObj_4.ath = 0;
			hotspotDataObj_4.atv = 90;
			hotspotDataObj_4.width = 1000;
			hotspotDataObj_4.height = 1000;
			hotspotDataObj_4.ox = -500+0.2;
			hotspotDataObj_4.oy = -500+0.2;
			hotspotDataObj_4.alpha = 1;
			hotspotDataObj_4.name = "A35_N06_N50_"+_A35_N06_N50_num+"_5";
			hotspotDataObj_4.onloaded = A35_N06_N50Com;
			setHotspotData(hotspotDataObj_4);
		}
		
		// _F10_url = '';
		// carTypeSelect_pano2(_F10_code);

		_Q15_url = '';
		carTypeSelect_pano2(_Q15_code);
	}

	//第三排座椅
	if(value.substring(0, 3) == "A35" && value.split('_').length==3 && value.split('_')[1].substring(0, 3) == "N09")
	{

		if(_A35_N09_N50_url == _rootIntURL+"pano/dt_pano/panos_2/zuoyi/"+value+"/"+value+"_b.png")
		{
			return ;
		}

		_A35_N09_N50_url = _rootIntURL+"pano/dt_pano/panos_2/zuoyi/"+value+"/"+value+"_b.png";
		_A35_N09_N50_code = value;
		_A35_N09_N50_id = 0;
		_A35_N09_N50_num++;
		_A35_N09_N50_num = _A35_N09_N50_num%2;
		_A35_N09_N50_Total = 2;


		if((_A35_code == "A35A"&&_N50_code == "N50L")||(_A35_code == "A35A"&&_N50_code == "N50P"))
		{
			var hotspotDataObj_3 = {};
			hotspotDataObj_3.url = _rootIntURL+"pano/dt_pano/panos_2/zuoyi/"+value+"/"+value+"_b.png";
			hotspotDataObj_3.ath = 180;
			hotspotDataObj_3.atv = 0;
			hotspotDataObj_3.width = 942.96875;
			hotspotDataObj_3.height = 546.09375;
			hotspotDataObj_3.ox = -471.484375+0.2;
			hotspotDataObj_3.oy = -46.09375+0.2;
			hotspotDataObj_3.alpha = 1;
			hotspotDataObj_3.name = "A35_N09_N50_"+_A35_N09_N50_num+"_1";
			hotspotDataObj_3.onloaded = A35_N09_N50Com;
			setHotspotData(hotspotDataObj_3);

			var hotspotDataObj_4 = {};
			hotspotDataObj_4.url = _rootIntURL+"pano/dt_pano/panos_2/zuoyi/"+value+"/"+value+"_d.png";
			hotspotDataObj_4.ath = 0;
			hotspotDataObj_4.atv = 90;
			hotspotDataObj_4.width = 943.75;
			hotspotDataObj_4.height = 149.609375;
			hotspotDataObj_4.ox = -471.875+0.2;
			hotspotDataObj_4.oy = 350.390625+0.2;
			hotspotDataObj_4.alpha = 1;
			hotspotDataObj_4.name = "A35_N09_N50_"+_A35_N09_N50_num+"_2";
			hotspotDataObj_4.onloaded = A35_N09_N50Com;
			setHotspotData(hotspotDataObj_4);
		}

		if((_A35_code == "A35E"&&_N50_code == "N50L")||(_A35_code == "A35E"&&_N50_code == "N50P")
		||(_A35_code == "A35R"&&_N50_code == "N50L")||(_A35_code == "A35R"&&_N50_code == "N50P")
		||(_A35_code == "A35T"&&_N50_code == "N50L")||(_A35_code == "A35T"&&_N50_code == "N50P"))
		{
			var hotspotDataObj_3 = {};
			hotspotDataObj_3.url = _rootIntURL+"pano/dt_pano/panos_2/zuoyi/"+value+"/"+value+"_b.png";
			hotspotDataObj_3.ath = 180;
			hotspotDataObj_3.atv = 0;
			hotspotDataObj_3.width = 942.96875;
			hotspotDataObj_3.height = 546.875;
			hotspotDataObj_3.ox = -471.484375+0.2;
			hotspotDataObj_3.oy = -46.875+0.2;
			hotspotDataObj_3.alpha = 1;
			hotspotDataObj_3.name = "A35_N09_N50_"+_A35_N09_N50_num+"_1";
			hotspotDataObj_3.onloaded = A35_N09_N50Com;
			setHotspotData(hotspotDataObj_3);

			var hotspotDataObj_4 = {};
			hotspotDataObj_4.url = _rootIntURL+"pano/dt_pano/panos_2/zuoyi/"+value+"/"+value+"_d.png";
			hotspotDataObj_4.ath = 0;
			hotspotDataObj_4.atv = 90;
			hotspotDataObj_4.width = 943.75;
			hotspotDataObj_4.height = 987.109375;
			hotspotDataObj_4.ox = -471.875+0.2;
			hotspotDataObj_4.oy = -487.109375+0.2;
			hotspotDataObj_4.alpha = 1;
			hotspotDataObj_4.name = "A35_N09_N50_"+_A35_N09_N50_num+"_2";
			hotspotDataObj_4.onloaded = A35_N09_N50Com;
			setHotspotData(hotspotDataObj_4);
		}

		if(_A35_code == "A35E"&&_N50_code == "N50N")
		{
			var hotspotDataObj_3 = {};
			hotspotDataObj_3.url = _rootIntURL+"pano/dt_pano/panos_2/zuoyi/"+value+"/"+value+"_b.png";
			hotspotDataObj_3.ath = 180;
			hotspotDataObj_3.atv = 0;
			hotspotDataObj_3.width = 942.96875;
			hotspotDataObj_3.height = 546.484375;
			hotspotDataObj_3.ox = -471.484375+0.2;
			hotspotDataObj_3.oy = -46.484375+0.2;
			hotspotDataObj_3.alpha = 1;
			hotspotDataObj_3.name = "A35_N09_N50_"+_A35_N09_N50_num+"_1";
			hotspotDataObj_3.onloaded = A35_N09_N50Com;
			setHotspotData(hotspotDataObj_3);

			var hotspotDataObj_4 = {};
			hotspotDataObj_4.url = _rootIntURL+"pano/dt_pano/panos_2/zuoyi/"+value+"/"+value+"_d.png";
			hotspotDataObj_4.ath = 0;
			hotspotDataObj_4.atv = 90;
			hotspotDataObj_4.width = 943.75;
			hotspotDataObj_4.height = 658.59375;
			hotspotDataObj_4.ox = -471.875+0.2;
			hotspotDataObj_4.oy = -158.59375+0.2;
			hotspotDataObj_4.alpha = 1;
			hotspotDataObj_4.name = "A35_N09_N50_"+_A35_N09_N50_num+"_2";
			hotspotDataObj_4.onloaded = A35_N09_N50Com;
			setHotspotData(hotspotDataObj_4);
		}

		if(_A35_code == "A35R"&&_N50_code == "N50Y")
		{
			var hotspotDataObj_3 = {};
			hotspotDataObj_3.url = _rootIntURL+"pano/dt_pano/panos_2/zuoyi/"+value+"/"+value+"_b.png";
			hotspotDataObj_3.ath = 180;
			hotspotDataObj_3.atv = 0;
			hotspotDataObj_3.width = 942.96875;
			hotspotDataObj_3.height = 546.484375;
			hotspotDataObj_3.ox = -471.484375+0.2;
			hotspotDataObj_3.oy = -46.484375+0.2;
			hotspotDataObj_3.alpha = 1;
			hotspotDataObj_3.name = "A35_N09_N50_"+_A35_N09_N50_num+"_1";
			hotspotDataObj_3.onloaded = A35_N09_N50Com;
			setHotspotData(hotspotDataObj_3);

			var hotspotDataObj_4 = {};
			hotspotDataObj_4.url = _rootIntURL+"pano/dt_pano/panos_2/zuoyi/"+value+"/"+value+"_d.png";
			hotspotDataObj_4.ath = 0;
			hotspotDataObj_4.atv = 90;
			hotspotDataObj_4.width = 943.75;
			hotspotDataObj_4.height = 411.71875;
			hotspotDataObj_4.ox = -471.875+0.2;
			hotspotDataObj_4.oy = 88.28125+0.2;
			hotspotDataObj_4.alpha = 1;
			hotspotDataObj_4.name = "A35_N09_N50_"+_A35_N09_N50_num+"_2";
			hotspotDataObj_4.onloaded = A35_N09_N50Com;
			setHotspotData(hotspotDataObj_4);
		}
		
		
		
		
	}


	//内饰格调
	if(value == "A35A"||value == "A35E"||value == "A35R"||value == "A35T")
	{

		// if(_N06_code=="" && _N50_code=="")
		// {
		// 	return ;
		// }
		
		if(value == "A35E")
		{

			_krpano.set("hotspot["+"A35_"+0+"_1"+"].url","");
			_krpano.set("hotspot["+"A35_"+0+"_2"+"].url","");
			_krpano.set("hotspot["+"A35_"+0+"_3"+"].url","");
			_krpano.set("hotspot["+"A35_"+0+"_4"+"].url","");

			_krpano.set("hotspot["+"A35_"+1+"_1"+"].url","");
			_krpano.set("hotspot["+"A35_"+1+"_2"+"].url","");
			_krpano.set("hotspot["+"A35_"+1+"_3"+"].url","");
			_krpano.set("hotspot["+"A35_"+1+"_4"+"].url","");

			_A35_url = "";
			return ;
		}


		if(value == "A35A"||value == "A35T"||value == "A35R")
		{

			if(_A35_url == _rootIntURL+"pano/dt_pano/panos_2/"+value+"/"+value+"_f.png")
			{
		  		return ;
			}

			_A35_url = _rootIntURL+"pano/dt_pano/panos_2/"+value+"/"+value+"_f.png";
			_A35_code = value;
			_A35_id = 0;
			_A35_num++;
			_A35_num = _A35_num%2;
			_A35_Total = 3;


			var hotspotDataObj = {};
			hotspotDataObj.url = _rootIntURL+"pano/dt_pano/panos_2/"+value+"/"+value+"_f.png";
			hotspotDataObj.ath = 0;
			hotspotDataObj.atv = 0;
			hotspotDataObj.width = 624.21875;
			hotspotDataObj.height = 385.15625;
			hotspotDataObj.ox = -348.828125;
			hotspotDataObj.oy = 57.03125;
			// hotspotDataObj.alpha = 1;
			hotspotDataObj.name = "A35_"+_A35_num+"_1";
			hotspotDataObj.onloaded = A35Com;
			setHotspotData(hotspotDataObj);

			var hotspotDataObj_1 = {};
			hotspotDataObj_1.url = _rootIntURL+"pano/dt_pano/panos_2/"+value+"/"+value+"_l.png";
			hotspotDataObj_1.ath = -90;
			hotspotDataObj_1.atv = 0;
			hotspotDataObj_1.width = 554.296875;
			hotspotDataObj_1.height = 201.5625;
			hotspotDataObj_1.ox = -171.875;
			hotspotDataObj_1.oy = 145.3125;
			// hotspotDataObj_1.alpha = 1;
			hotspotDataObj_1.name = "A35_"+_A35_num+"_2";
			hotspotDataObj_1.onloaded = A35Com;
			setHotspotData(hotspotDataObj_1);

			var hotspotDataObj_2 = {};
			hotspotDataObj_2.url = _rootIntURL+"pano/dt_pano/panos_2/"+value+"/"+value+"_r.png";
			hotspotDataObj_2.ath = 90;
			hotspotDataObj_2.atv = 0;
			hotspotDataObj_2.width = 554.296875;
			hotspotDataObj_2.height = 201.5625;
			hotspotDataObj_2.ox = -382.421875;
			hotspotDataObj_2.oy = 145.3125;
			// hotspotDataObj_2.alpha = 1;
			hotspotDataObj_2.name = "A35_"+_A35_num+"_3";
			hotspotDataObj_2.onloaded = A35Com;
			setHotspotData(hotspotDataObj_2);

			
		}




	}

	//方向盘
    if(value == "F10F" || value == "F10Q" || value == "F10G" || value == "F11A" || value == "F11B" || value == "F11C")
	{
		/*
		if(_A35_code=="")
		{
			return ;
		}

		var _FXP_code = "";
		if((_A35_code == "A35E"||_A35_code == "A35A") && value == "F10F")
		{
			_FXP_code = "F10F_A35E";
		}
		else if(_A35_code == "A35R" && value == "F10F")
		{
			_FXP_code = "F10F_A35R";
		}
		else if(_A35_code == "A35T" && value == "F10F")
		{
			_FXP_code = "F10F_A35T";
		}
		else if(value == "F10G")
		{
			_FXP_code = "F10G";
		}
		else if(_F10_url == _rootIntURL+"pano/dt_pano/panos_2/F10/"+_FXP_code+"/"+_FXP_code+"_f.png")
		{
			// return ;
		}
		else{

			return ;
		}

		if(_F10_url == _rootIntURL+"pano/dt_pano/panos_2/F10/"+_FXP_code+"/"+_FXP_code+"_f.png")
		{
			return ;
		}

		_F10_url = _rootIntURL+"pano/dt_pano/panos_2/F10/"+_FXP_code+"/"+_FXP_code+"_f.png";
		_F10_code = value;
		_F10_id = 0;
		_F10_num++;
		_F10_num = _F10_num%2;
		_F10_Total = 1;


		var hotspotDataObj = {};
		hotspotDataObj.url = _rootIntURL+"pano/dt_pano/panos_2/F10/"+_FXP_code+"/"+_FXP_code+"_f.png";
		hotspotDataObj.ath = 0;
		hotspotDataObj.atv = 0;
		hotspotDataObj.width = 183.59375;
		hotspotDataObj.height = 332.03125;
		hotspotDataObj.ox = -253.125;
		hotspotDataObj.oy = -9.375;
		// hotspotDataObj.alpha = 1;
		hotspotDataObj.name = "F10_"+_F10_num+"_1";
		hotspotDataObj.onloaded = F10Com;
		setHotspotData(hotspotDataObj);
		*/
		
		if(value == "F10F" || value == "F10Q" || value == "F10G" )
		{
			_F10_code = value;
		}
		if(value == "F11A" || value == "F11B" || value == "F11C")
		{
			_F11_code = value;
		}
		if(_F10_code.length>1&&_F11_code.length>1)
		{
			var _FXP_code = "";

			if(_F10_code == "F10G")
			{
				_FXP_code = 'F10G';
			}else{
				_FXP_code = _F10_code+"_"+_F11_code;
			}

			

			if(_F10_url == _rootIntURL+"pano/dt_pano/panos_2/F10/"+_FXP_code+"_f.png")
			{
				// return ;
			}

			_F10_url = _rootIntURL+"pano/dt_pano/panos_2/F10/"+_FXP_code+"_f.png";
			// _F10_code = value;
			_F10_id = 0;
			_F10_num++;
			_F10_num = _F10_num%2;
			_F10_Total = 1;


			var hotspotDataObj = {};
			hotspotDataObj.url = _rootIntURL+"pano/dt_pano/panos_2/F10/"+_FXP_code+"_f.png";
			hotspotDataObj.ath = 0;
			hotspotDataObj.atv = 0;
			hotspotDataObj.width = 183.59375;
			hotspotDataObj.height = 332.03125;
			hotspotDataObj.ox = -253.125;
			hotspotDataObj.oy = -9.375;
			// hotspotDataObj.alpha = 1;
			hotspotDataObj.name = "F10_"+_F10_num+"_1";
			hotspotDataObj.onloaded = F10Com;
			setHotspotData(hotspotDataObj);
		}


		
		
	}

	//内后视镜类型
	if(value == "M10F"||value == "M10H")
	{

		if(_M10_url == _rootIntURL+"pano/dt_pano/panos_2/"+value+"/"+value+"_f.png")
		{
			return ;
		}

		_M10_url = _rootIntURL+"pano/dt_pano/panos_2/"+value+"/"+value+"_f.png";
		_M10_code = value;
		_M10_id = 0;
		_M10_num++;
		_M10_num = _M10_num%2;
		_M10_Total = 1;

		if(value == "M10F")
		{
			var hotspotDataObj = {};
			hotspotDataObj.url = _rootIntURL+"pano/dt_pano/panos_2/"+value+"/"+value+"_f.png";
			hotspotDataObj.ath = 0;
			hotspotDataObj.atv = 0;
			hotspotDataObj.width = 94.53125;
			hotspotDataObj.height = 31.25;
			hotspotDataObj.ox = -54.6875;
			hotspotDataObj.oy = -106.25;
			// hotspotDataObj.alpha = 1;
			hotspotDataObj.name = "M10_"+_M10_num+"_1";
			hotspotDataObj.onloaded = M10Com;
			setHotspotData(hotspotDataObj);

		}
		if(value == "M10H")
		{
			var hotspotDataObj = {};
			hotspotDataObj.url = _rootIntURL+"pano/dt_pano/panos_2/"+value+"/"+value+"_f.png";
			hotspotDataObj.ath = 0;
			hotspotDataObj.atv = 0;
			hotspotDataObj.width = 107.03125;
			hotspotDataObj.height = 32.8125;
			hotspotDataObj.ox = -53.515625;
			hotspotDataObj.oy = -98.046875;
			// hotspotDataObj.alpha = 1;
			hotspotDataObj.name = "M10_"+_M10_num+"_1";
			hotspotDataObj.onloaded = M10Com;
			setHotspotData(hotspotDataObj);

		}

	}

	//IP内饰
	if(value == "M76U"||value == "M76V"||value == "M76L")
	{

		if(_M76_url == _rootIntURL+"pano/dt_pano/panos_2/"+value+"/"+value+"_f.png")
		{
			return ;
		}

		_M76_url = _rootIntURL+"pano/dt_pano/panos_2/"+value+"/"+value+"_f.png";
		_M76_code = value;
		_M76_id = 0;
		_M76_num++;
		_M76_num = _M76_num%2;
		_M76_Total = 3;

		if(value == "M76U"||value == "M76V"||value == "M76L")
		{
			var hotspotDataObj = {};
			hotspotDataObj.url = _rootIntURL+"pano/dt_pano/panos_2/"+value+"/"+value+"_f.png";
			hotspotDataObj.ath = 0;
			hotspotDataObj.atv = 0;
			hotspotDataObj.width = 719.53125;
			hotspotDataObj.height = 416.015625;
			hotspotDataObj.ox = -359.765625;
			hotspotDataObj.oy = 35.9375;
			// hotspotDataObj.alpha = 1;
			hotspotDataObj.name = "M76_"+_M76_num+"_1";
			hotspotDataObj.onloaded = M76Com;
			setHotspotData(hotspotDataObj);

			var hotspotDataObj_1 = {};
			hotspotDataObj_1.url = _rootIntURL+"pano/dt_pano/panos_2/"+value+"/"+value+"_l.png";
			hotspotDataObj_1.ath = -90;
			hotspotDataObj_1.atv = 0;
			hotspotDataObj_1.width = 322.65625;
			hotspotDataObj_1.height = 58.203125;
			hotspotDataObj_1.ox = -16.796875;
			hotspotDataObj_1.oy = 63.28125;
			// hotspotDataObj_1.alpha = 1;
			hotspotDataObj_1.name = "M76_"+_M76_num+"_2";
			hotspotDataObj_1.onloaded = M76Com;
			setHotspotData(hotspotDataObj_1);

			var hotspotDataObj_2 = {};
			hotspotDataObj_2.url = _rootIntURL+"pano/dt_pano/panos_2/"+value+"/"+value+"_r.png";
			hotspotDataObj_2.ath = 90;
			hotspotDataObj_2.atv = 0;
			hotspotDataObj_2.width = 323.046875;
			hotspotDataObj_2.height = 58.203125;
			hotspotDataObj_2.ox = -306.25;
			hotspotDataObj_2.oy = 63.28125;
			// hotspotDataObj_2.alpha = 1;
			hotspotDataObj_2.name = "M76_"+_M76_num+"_3";
			hotspotDataObj_2.onloaded = M76Com;
			setHotspotData(hotspotDataObj_2);

		}

	}

	//换挡杆
	if(value == "M77E"||value == "M77F"||value == "M77G"||value == "M77L")
	{
		var path = "M77_pu";

        if(_U00_code=="U004")
        {
			path = "M77_da";
        }

		if(_M77_url == _rootIntURL+"pano/dt_pano/panos_2/"+path+"/"+value+"/"+value+"_f.png")
		{
			return ;
		}

		_M77_url = _rootIntURL+"pano/dt_pano/panos_2/"+path+"/"+value+"/"+value+"_f.png";
		_M77_code = value;
		_M77_id = 0;
		_M77_num++;
		_M77_num = _M77_num%2;
		_M77_Total = 2;

		if(value == "M77F"||value == "M77E"||value == "M77G"||value == "M77L")
		{
			var hotspotDataObj = {};
			hotspotDataObj.url = _rootIntURL+"pano/dt_pano/panos_2/"+path+"/"+value+"/"+value+"_f.png";
			hotspotDataObj.ath = 0;
			hotspotDataObj.atv = 0;
			hotspotDataObj.width = 189.453125;
			hotspotDataObj.height = 164.0625;
			hotspotDataObj.ox = -133.984375;
			hotspotDataObj.oy = 80.46875;
			// hotspotDataObj.alpha = 1;
			hotspotDataObj.name = "M77_"+_M77_num+"_1";
			hotspotDataObj.onloaded = M77Com;
			setHotspotData(hotspotDataObj);

			var hotspotDataObj_1 = {};
			hotspotDataObj_1.url = _rootIntURL+"pano/dt_pano/panos_2/"+path+"/"+value+"/"+value+"_d.png";
			hotspotDataObj_1.ath = 0;
			hotspotDataObj_1.atv = 90;
			hotspotDataObj_1.width = 240.3770621;
			hotspotDataObj_1.height = 173.9984289;
			hotspotDataObj_1.ox = -120.188531;
			hotspotDataObj_1.oy = -500;
			// hotspotDataObj_1.alpha = 1;
			hotspotDataObj_1.name = "M77_"+_M77_num+"_2";
			hotspotDataObj_1.onloaded = M77Com;
			setHotspotData(hotspotDataObj_1);
			
		}

	}

	//主副驾座椅加热
	if(value == "N13C"||value == "N13X")
	{

		if(_N13_url == _rootIntURL+"pano/dt_pano/panos_2/"+value+"/"+value+"_f.png")
		{
			return ;
		}

		_N13_url = _rootIntURL+"pano/dt_pano/panos_2/"+value+"/"+value+"_f.png";
		_N13_code = value;
		_N13_id = 0;
		_N13_num++;
		_N13_num = _N13_num%2;
		_N13_Total = 1;


		if(value == "N13X")
		{
			_krpano.set("hotspot["+"N13_"+0+"_1"+"].url","");

			_krpano.set("hotspot["+"N13_"+1+"_1"+"].url","");

		}


		if(value == "N13C")
		{
			var hotspotDataObj = {};
			hotspotDataObj.url = _rootIntURL+"pano/dt_pano/panos_2/"+value+"/"+value+"_f.png";
			hotspotDataObj.ath = 0;
			hotspotDataObj.atv = 0;
			hotspotDataObj.width = 63.671875;
			hotspotDataObj.height = 4.296875;
			hotspotDataObj.ox = -31.640625;
			hotspotDataObj.oy = 178.90625;
			// hotspotDataObj.alpha = 1;
			hotspotDataObj.name = "N13_"+_N13_num+"_1";
			hotspotDataObj.onloaded = N13Com;
			setHotspotData(hotspotDataObj);
		}
	}

	//车道偏离预警系统
	if(value == "Q06B"||value == "Q06X")
	{

		if(_Q06_url == _rootIntURL+"pano/dt_pano/panos_2/"+value+"/"+value+"_f.png")
		{
			return ;
		}

		_Q06_url = _rootIntURL+"pano/dt_pano/panos_2/"+value+"/"+value+"_f.png";
		_Q06_code = value;
		_Q06_id = 0;
		_Q06_num++;
		_Q06_num = _Q06_num%2;
		_Q06_Total = 1;


		if(value == "Q06X")
		{
			_krpano.set("hotspot["+"Q06_"+0+"_1"+"].url","");

			_krpano.set("hotspot["+"Q06_"+1+"_1"+"].url","");

		}


		if(value == "Q06B")
		{
			var hotspotDataObj = {};
			hotspotDataObj.url = _rootIntURL+"pano/dt_pano/panos_2/"+value+"/"+value+"_f.png";
			hotspotDataObj.ath = 0;
			hotspotDataObj.atv = 0;
			hotspotDataObj.width = 15.625;
			hotspotDataObj.height = 6.640625;
			hotspotDataObj.ox = -33.59375;
			hotspotDataObj.oy = 164.0625;
			// hotspotDataObj.alpha = 1;
			hotspotDataObj.name = "Q06_"+_Q06_num+"_1";
			hotspotDataObj.onloaded = Q06Com;
			setHotspotData(hotspotDataObj);
		}
	}

	//气帘
	if(familyCode == "Q08")
	{

		var qilian_Code = "";
		if(value == "Q08C"&&_M49_code == "M49A")
		{
			qilian_Code = "Q08C_M49A";
		}
		else if(value == "Q08C"&&_M49_code == "M49B")
		{
			qilian_Code = "Q08C_M49B";
		}
		else if(value == "Q08X"&&_M49_code == "M49A")
		{
			qilian_Code = "Q08X_M49A";
		}
		else if(value == "Q08X"&&_M49_code == "M49B")
		{
			qilian_Code = "Q08X_M49B";
		}
		else if(_Q08_M49_url == _rootIntURL+"pano/dt_pano/panos_2/"+qilian_Code+"/"+qilian_Code+"_f.png")
		{
			// return ;
		}
		else{

			return ;
		}


		if(_Q08_M49_url == _rootIntURL+"pano/dt_pano/panos_2/"+qilian_Code+"/"+qilian_Code+"_f.png")
		{
			return ;
		}

		_Q08_M49_url = _rootIntURL+"pano/dt_pano/panos_2/"+qilian_Code+"/"+qilian_Code+"_f.png";
		_Q08_M49_code = value;
		_Q08_M49_id = 0;
		_Q08_M49_num++;
		_Q08_M49_num = _Q08_M49_num%2;
		_Q08_M49_Total = 3;

		if(qilian_Code == "Q08X_M49A"||qilian_Code == "Q08X_M49B")
		{
			_krpano.set("hotspot["+"Q08_M49_"+0+"_1"+"].url","");
			_krpano.set("hotspot["+"Q08_M49_"+0+"_2"+"].url","");
			_krpano.set("hotspot["+"Q08_M49_"+0+"_3"+"].url","");

			_krpano.set("hotspot["+"Q08_M49_"+1+"_1"+"].url","");
			_krpano.set("hotspot["+"Q08_M49_"+1+"_2"+"].url","");
			_krpano.set("hotspot["+"Q08_M49_"+1+"_3"+"].url","");
		}

		if(qilian_Code == "Q08C_M49A"||qilian_Code == "Q08C_M49B")
		{

			var hotspotDataObj = {};
			hotspotDataObj.url = _rootIntURL+"pano/dt_pano/panos_2/"+qilian_Code+"/"+qilian_Code+"_f.png";
			hotspotDataObj.ath = 0;
			hotspotDataObj.atv = 0;
			hotspotDataObj.width = 1000;
			hotspotDataObj.height = 36.328125;
			hotspotDataObj.ox = -500;
			hotspotDataObj.oy = -253.125;
			// hotspotDataObj.alpha = 1;
			hotspotDataObj.name = "Q08_M49_"+_Q08_M49_num+"_1";
			hotspotDataObj.onloaded = Q08_M49Com;
			setHotspotData(hotspotDataObj);

			var hotspotDataObj_1 = {};
			hotspotDataObj_1.url = _rootIntURL+"pano/dt_pano/panos_2/"+qilian_Code+"/"+qilian_Code+"_l.png";
			hotspotDataObj_1.ath = -90;
			hotspotDataObj_1.atv = 0;
			hotspotDataObj_1.width = 722.65625;
			hotspotDataObj_1.height = 40.625;
			hotspotDataObj_1.ox = -222.65625;
			hotspotDataObj_1.oy = -253.125;
			// hotspotDataObj_1.alpha = 1;
			hotspotDataObj_1.name = "Q08_M49_"+_Q08_M49_num+"_2";
			hotspotDataObj_1.onloaded = Q08_M49Com;
			setHotspotData(hotspotDataObj_1);

			var hotspotDataObj_2 = {};
			hotspotDataObj_2.url = _rootIntURL+"pano/dt_pano/panos_2/"+qilian_Code+"/"+qilian_Code+"_r.png";
			hotspotDataObj_2.ath = 90;
			hotspotDataObj_2.atv = 0;
			hotspotDataObj_2.width = 722.65625;
			hotspotDataObj_2.height = 40.625;
			hotspotDataObj_2.ox = -500;
			hotspotDataObj_2.oy = -253.125;
			// hotspotDataObj_2.alpha = 1;
			hotspotDataObj_2.name = "Q08_M49_"+_Q08_M49_num+"_3";
			hotspotDataObj_2.onloaded = Q08_M49Com;
			setHotspotData(hotspotDataObj_2);

		}

	}

	//isofix图标
	if(value == "Q15H")
	{
		if(_A35_code=="")
		{
			return ;
		}

		var isofix_Code = "";
		if(value == "Q15H"&&_N06_code == "N06F")
		{
			isofix_Code = "Q15H_N06F";
		}
		else if(value == "Q15H"&&_N06_code == "N06L")
		{
			isofix_Code = "Q15H_N06L";
		}
		else if(value == "Q15H"&&_N06_code == "N06N")
		{
			isofix_Code = "Q15H_N06N";
		}
		else if(_Q15_url == _rootIntURL+"pano/dt_pano/panos_2/Q15/"+isofix_Code+"/"+isofix_Code+"_b.png")
		{
			// return ;
		}
		else{

			return ;
		}

		if(_Q15_url == _rootIntURL+"pano/dt_pano/panos_2/Q15/"+isofix_Code+"/"+isofix_Code+"_b.png")
		{
			return ;
		}

		_Q15_url = _rootIntURL+"pano/dt_pano/panos_2/Q15/"+isofix_Code+"/"+isofix_Code+"_b.png";
		_Q15_code = value;
		_Q15_id = 0;
		_Q15_num++;
		_Q15_num = _Q15_num%2;
		_Q15_Total = 4;

		if(isofix_Code == "Q15H_N06F"||isofix_Code == "Q15H_N06L")
		{
			var hotspotDataObj_1 = {};
			hotspotDataObj_1.url = _rootIntURL+"pano/dt_pano/panos_2/Q15/"+isofix_Code+"/"+isofix_Code+"_l.png";
			hotspotDataObj_1.ath = -90;
			hotspotDataObj_1.atv = 0;
			hotspotDataObj_1.width = 9.375;
			hotspotDataObj_1.height = 15.234375;
			hotspotDataObj_1.ox = -219.53125;
			hotspotDataObj_1.oy = 484.765625;
			// hotspotDataObj_1.alpha = 1;
			hotspotDataObj_1.name = "Q15_"+_Q15_num+"_1";
			hotspotDataObj_1.onloaded = Q15Com;
			setHotspotData(hotspotDataObj_1);

			var hotspotDataObj_2 = {};
			hotspotDataObj_2.url = _rootIntURL+"pano/dt_pano/panos_2/Q15/"+isofix_Code+"/"+isofix_Code+"_r.png";
			hotspotDataObj_2.ath = 90;
			hotspotDataObj_2.atv = 0;
			hotspotDataObj_2.width = 9.765625;
			hotspotDataObj_2.height = 20.3125;
			hotspotDataObj_2.ox = 209.375;
			hotspotDataObj_2.oy = 479.296875;
			// hotspotDataObj_2.alpha = 1;
			hotspotDataObj_2.name = "Q15_"+_Q15_num+"_2";
			hotspotDataObj_2.onloaded = Q15Com;
			setHotspotData(hotspotDataObj_2);

			var hotspotDataObj_3 = {};
			hotspotDataObj_3.url = _rootIntURL+"pano/dt_pano/panos_2/Q15/"+isofix_Code+"/"+isofix_Code+"_b.png";
			hotspotDataObj_3.ath = 180;
			hotspotDataObj_3.atv = 0;
			hotspotDataObj_3.width = 1000;
			hotspotDataObj_3.height = 1000;
			hotspotDataObj_3.ox = -500;
			hotspotDataObj_3.oy = -500;
			// hotspotDataObj_3.alpha = 1;
			hotspotDataObj_3.name = "Q15_"+_Q15_num+"_3";
			hotspotDataObj_3.onloaded = Q15Com;
			setHotspotData(hotspotDataObj_3);

			var hotspotDataObj_4 = {};
			hotspotDataObj_4.url = _rootIntURL+"pano/dt_pano/panos_2/Q15/"+isofix_Code+"/"+isofix_Code+"_d.png";
			hotspotDataObj_4.ath = 0;
			hotspotDataObj_4.atv = 90;
			hotspotDataObj_4.width = 743.75;
			hotspotDataObj_4.height = 12.5;
			hotspotDataObj_4.ox =  -500.0;
			hotspotDataObj_4.oy = 211.71875;
			// hotspotDataObj_4.alpha = 1;
			hotspotDataObj_4.name = "Q15_"+_Q15_num+"_4";
			hotspotDataObj_4.onloaded = Q15Com;
			setHotspotData(hotspotDataObj_4);

		}
		if(isofix_Code == "Q15H_N06N")
		{

			var hotspotDataObj_1 = {};
			hotspotDataObj_1.url = _rootIntURL+"pano/dt_pano/panos_2/Q15/"+isofix_Code+"/"+isofix_Code+"_l.png";
			hotspotDataObj_1.ath = -90;
			hotspotDataObj_1.atv = 0;
			hotspotDataObj_1.width = 8.203125;
			hotspotDataObj_1.height = 16.40625;
			hotspotDataObj_1.ox = -134.765625;
			hotspotDataObj_1.oy = 464.453125;
			// hotspotDataObj_1.alpha = 1;
			hotspotDataObj_1.name = "Q15_"+_Q15_num+"_1";
			hotspotDataObj_1.onloaded = Q15Com;
			setHotspotData(hotspotDataObj_1);

			var hotspotDataObj_2 = {};
			hotspotDataObj_2.url = _rootIntURL+"pano/dt_pano/panos_2/Q15/"+isofix_Code+"/"+isofix_Code+"_r.png";
			hotspotDataObj_2.ath = 90;
			hotspotDataObj_2.atv = 0;
			hotspotDataObj_2.width = 8.984375;
			hotspotDataObj_2.height = 19.921875;
			hotspotDataObj_2.ox = 128.515625;
			hotspotDataObj_2.oy = 464.453125;
			// hotspotDataObj_2.alpha = 1;
			hotspotDataObj_2.name = "Q15_"+_Q15_num+"_2";
			hotspotDataObj_2.onloaded = Q15Com;
			setHotspotData(hotspotDataObj_2);

			var hotspotDataObj_3 = {};
			hotspotDataObj_3.url = _rootIntURL+"pano/dt_pano/panos_2/Q15/"+isofix_Code+"/"+isofix_Code+"_b.png";
			hotspotDataObj_3.ath = 180;
			hotspotDataObj_3.atv = 0;
			hotspotDataObj_3.width = 1000;
			hotspotDataObj_3.height = 1000;
			hotspotDataObj_3.ox = -500;
			hotspotDataObj_3.oy = -500;
			// hotspotDataObj_3.alpha = 1;
			hotspotDataObj_3.name = "Q15_"+_Q15_num+"_3";
			hotspotDataObj_3.onloaded = Q15Com;
			setHotspotData(hotspotDataObj_3);

			var hotspotDataObj_4 = {};
			hotspotDataObj_4.url = _rootIntURL+"pano/dt_pano/panos_2/Q15/"+isofix_Code+"/"+isofix_Code+"_d.png";
			hotspotDataObj_4.ath = 0;
			hotspotDataObj_4.atv = 90;
			hotspotDataObj_4.width = 594.140625;
			hotspotDataObj_4.height = 10.15625;
			hotspotDataObj_4.ox =  -296.09375;
			hotspotDataObj_4.oy = 133.59375;
			// hotspotDataObj_4.alpha = 1;
			hotspotDataObj_4.name = "Q15_"+_Q15_num+"_4";
			hotspotDataObj_4.onloaded = Q15Com;
			setHotspotData(hotspotDataObj_4);

		}

	}

	//组合仪表
	if(value == "R02E"||value == "R02G"||value == "R02F")
	{

		if(_R02_url == _rootIntURL+"pano/dt_pano/panos_2/"+value+"/"+value+"_f.png")
		{
			return ;
		}

		_R02_url = _rootIntURL+"pano/dt_pano/panos_2/"+value+"/"+value+"_f.png";
		_R02_code = value;
		_R02_id = 0;
		_R02_num++;
		_R02_num = _R02_num%2;
		_R02_Total = 1;


		/*if(value == "R02E")
		{
			_krpano.set("hotspot["+"R02_"+0+"_1"+"].url","");
			_krpano.set("hotspot["+"R02_"+1+"_1"+"].url","");
		}*/


		if(value == "R02E"||value == "R02G"||value == "R02F")
		{
			var hotspotDataObj = {};
			hotspotDataObj.url = _rootIntURL+"pano/dt_pano/panos_2/"+value+"/"+value+"_f.png";
			hotspotDataObj.ath = 0;
			hotspotDataObj.atv = 0;
			hotspotDataObj.width = 330.46875;
			hotspotDataObj.height = 302.34375;
			hotspotDataObj.ox = -253.125;
			hotspotDataObj.oy = 20.3125;
			// hotspotDataObj.alpha = 1;
			hotspotDataObj.name = "R02_"+_R02_num+"_1";
			hotspotDataObj.onloaded = R02Com;
			setHotspotData(hotspotDataObj);
		}

	}

	//U04A
	if(value == "U04A"||value == "U04X")
	{

		if(_U04_url == _rootIntURL+"pano/dt_pano/panos_2/"+value+"/"+value+"_f.png")
		{
			return ;
		}

		_U04_url = _rootIntURL+"pano/dt_pano/panos_2/"+value+"/"+value+"_f.png";
		_U04_code = value;
		_U04_id = 0;
		_U04_num++;
		_U04_num = _U04_num%2;
		_U04_Total = 1;


		if(value == "U04X")
		{
			_krpano.set("hotspot["+"U04_"+0+"_1"+"].url","");
			_krpano.set("hotspot["+"U04_"+1+"_1"+"].url","");
		}


		if(value == "U04A")
		{
			var hotspotDataObj = {};
			hotspotDataObj.url = _rootIntURL+"pano/dt_pano/panos_2/"+value+"/"+value+"_f.png";
			hotspotDataObj.ath = 0;
			hotspotDataObj.atv = 0;
			hotspotDataObj.width = 42.1875;
			hotspotDataObj.height = 21.875;
			hotspotDataObj.ox = -122.265625;
			hotspotDataObj.oy = -20.3125;
			// hotspotDataObj.alpha = 1;
			hotspotDataObj.name = "U04_"+_U04_num+"_1";
			hotspotDataObj.onloaded = U04Com;
			setHotspotData(hotspotDataObj);
		}

	}

	//自适应巡航
	if(value == "C06E"||value == "C06X")
	{

		if(_C06_url == _rootIntURL+"pano/dt_pano/panos_2/"+value+"/"+value+"_f.png")
		{
			return ;
		}

		_C06_url = _rootIntURL+"pano/dt_pano/panos_2/"+value+"/"+value+"_f.png";
		_C06_code = value;
		_C06_id = 0;
		_C06_num++;
		_C06_num = _C06_num%2;
		_C06_Total = 1;


		if(value == "C06X")
		{
			_krpano.set("hotspot["+"C06_"+0+"_1"+"].url","");
			_krpano.set("hotspot["+"C06_"+1+"_1"+"].url","");
		}


		if(value == "C06E")
		{
			var hotspotDataObj = {};
			hotspotDataObj.url = _rootIntURL+"pano/dt_pano/panos_2/"+value+"/"+value+"_f.png";
			hotspotDataObj.ath = 0;
			hotspotDataObj.atv = 0;
			hotspotDataObj.width = 14.453125;
			hotspotDataObj.height = 8.59375;
			hotspotDataObj.ox = -192.578125;
			hotspotDataObj.oy = 72.265625;
			// hotspotDataObj.alpha = 1;
			hotspotDataObj.name = "C06_"+_C06_num+"_1";
			hotspotDataObj.onloaded = C06Com;
			setHotspotData(hotspotDataObj);
		}

	}

	//无钥匙进入及启动系统
	if(value == "S30P"||value == "S30X")
	{

		if(_S30_url == _rootIntURL+"pano/dt_pano/panos_2/"+value+"/"+value+"_f.png")
		{
			return ;
		}

		_S30_url = _rootIntURL+"pano/dt_pano/panos_2/"+value+"/"+value+"_f.png";
		_S30_code = value;
		_S30_id = 0;
		_S30_num++;
		_S30_num = _S30_num%2;
		_S30_Total = 1;


		if(value == "S30X")
		{
			_krpano.set("hotspot["+"S30_"+0+"_1"+"].url","");
			_krpano.set("hotspot["+"S30_"+1+"_1"+"].url","");
		}


		if(value == "S30P")
		{
			var hotspotDataObj = {};
			hotspotDataObj.url = _rootIntURL+"pano/dt_pano/panos_2/"+value+"/"+value+"_f.png";
			hotspotDataObj.ath = 0;
			hotspotDataObj.atv = 0;
			hotspotDataObj.width = 120.3125;
			hotspotDataObj.height = 61.71875;
			hotspotDataObj.ox = -168.75;
			hotspotDataObj.oy = 63.671875;
			// hotspotDataObj.alpha = 1;
			hotspotDataObj.name = "S30_"+_S30_num+"_1";
			hotspotDataObj.onloaded = S30Com;
			setHotspotData(hotspotDataObj);
		}

	}

	//娱乐系统
	if(value == "U00Y"||value == "U00Z"||value == "U004")
	{

		if(_U00_url == _rootIntURL+"pano/dt_pano/panos_2/"+value+"/"+value+"_f.png")
		{
			// return ;
		}

		_U00_url = _rootIntURL+"pano/dt_pano/panos_2/"+value+"/"+value+"_f.png";
		_U00_code = value;
		_U00_id = 0;
		_U00_num++;
		_U00_num = _U00_num%2;
		_U00_Total = 1;


		if(value == "U00Y"||value == "U00Z")
		{
			var hotspotDataObj = {};
			hotspotDataObj.url = _rootIntURL+"pano/dt_pano/panos_2/"+value+"/"+value+"_f.png";
			hotspotDataObj.ath = 0;
			hotspotDataObj.atv = 0;
			hotspotDataObj.width = 82.03125;
			hotspotDataObj.height = 96.09375;
			hotspotDataObj.ox = -41.015625;
			hotspotDataObj.oy = 46.484375;
			// hotspotDataObj.alpha = 1;
			hotspotDataObj.name = "U00_"+_U00_num+"_1";
			hotspotDataObj.onloaded = U00Com;
			setHotspotData(hotspotDataObj);

		}
		if(value == "U004")
		{
			var hotspotDataObj = {};
			hotspotDataObj.url = _rootIntURL+"pano/dt_pano/panos_2/"+value+"/"+value+"_f.png";
			hotspotDataObj.ath = 0;
			hotspotDataObj.atv = 0;
			hotspotDataObj.width = 98.4375;
			hotspotDataObj.height = 118.359375;
			hotspotDataObj.ox = -49.21875;
			hotspotDataObj.oy = 40.234375;
			// hotspotDataObj.alpha = 1;
			hotspotDataObj.name = "U00_"+_U00_num+"_1";
			hotspotDataObj.onloaded = U00Com;
			setHotspotData(hotspotDataObj);

		}
		carTypeSelect_pano2(_M77_code);
	}

	//自动泊车辅助系统
	if(value == "U13A"||value == "U13X")
	{

		if(_U13_url == _rootIntURL+"pano/dt_pano/panos_2/"+value+"/"+value+"_f.png")
		{
			return ;
		}

		_U13_url = _rootIntURL+"pano/dt_pano/panos_2/"+value+"/"+value+"_f.png";
		_U13_code = value;
		_U13_id = 0;
		_U13_num++;
		_U13_num = _U13_num%2;
		_U13_Total = 1;


		if(value == "U13X")
		{
			_krpano.set("hotspot["+"U13_"+0+"_1"+"].url","");
			_krpano.set("hotspot["+"U13_"+1+"_1"+"].url","");
		}


		if(value == "U13A")
		{
			var hotspotDataObj = {};
			hotspotDataObj.url = _rootIntURL+"pano/dt_pano/panos_2/"+value+"/"+value+"_f.png";
			hotspotDataObj.ath = 0;
			hotspotDataObj.atv = 0;
			hotspotDataObj.width = 17.1875;
			hotspotDataObj.height = 6.640625;
			hotspotDataObj.ox = 17.578125;
			hotspotDataObj.oy = 170.703125;
			// hotspotDataObj.alpha = 1;
			hotspotDataObj.name = "U13_"+_U13_num+"_1";
			hotspotDataObj.onloaded = U13Com;
			setHotspotData(hotspotDataObj);
		}

	}

	//眼镜盒
	if(value == "M49A"||value == "M49B")
	{

		if(_M49_url == _rootIntURL+"pano/dt_pano/panos_2/"+value+"/"+value+"_l.png")
		{
			return ;
		}

		_M49_url = _rootIntURL+"pano/dt_pano/panos_2/"+value+"/"+value+"_l.png";
		_M49_code = value;
		_M49_id = 0;
		_M49_num++;
		_M49_num = _M49_num%2;
		_M49_Total = 1;



		if(value == "M49A"||value == "M49B")
		{
			var hotspotDataObj = {};
			hotspotDataObj.url = _rootIntURL+"pano/dt_pano/panos_2/"+value+"/"+value+"_l.png";
			hotspotDataObj.ath = -90;
			hotspotDataObj.atv = 0;
			hotspotDataObj.width = 39.27729772;
			hotspotDataObj.height = 19.63864886;
			hotspotDataObj.ox = -500;
			hotspotDataObj.oy = -500;
			// hotspotDataObj.alpha = 1;
			hotspotDataObj.name = "M49_"+_M49_num+"_1";
			hotspotDataObj.onloaded = M49Com;
			setHotspotData(hotspotDataObj);
		}

	}

}




function rootViwe2Complete()
{
	for(var i=0;i<currentFeatureList.length;i++)
	{
   		carTypeSelect_pano2(mySelf[currentFeatureList[i]]);
	}
	// carTypeSelect_pano2("duge");
	_krpano.call("GetAction();");
}




