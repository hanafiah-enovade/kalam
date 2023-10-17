export default {
	myVar1: [],
	myVar2: {},
	myFun1 () {
		//	write code here
		//	this.myVar1 = [1,2,3]
		
	},
	async myFun2 () {
		//	use async-await or promises
		//	await storeValue('varName', 'hello world')
		//ShowList.setText('hello world')
		ShowList.setText(appsmith.store.pilihan)
		return appsmith.store.pilihan.whatsapp_number
		//return 0
		
	}
}