基于JS写的进度条。使用方式：
<Stepper  steps={ [{title: 'Step One',render: ShowIcon1}, {title: 'Step Two', render: ShowIcon2}, {title: 'Step Three',render: ShowIcon3 }] } titleFontSize = {20}/>
每个render的函数原型为：
function ShowIcon1(active){
	if(active)
	{
		return(		
			<img src = {step1white} style = {{overflow:'visible',maxWidth:'60%'}}/>
			)
	}
	else
	{return(		
			<img src = {step1blue} style = {{overflow:'visible',maxWidth:'60%'}}/>
			)}
}
其余接口可以参考github上https://github.com/mu29/react-stepper的接口
为了应用的通用性，考虑了接口的兼容