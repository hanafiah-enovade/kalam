export default {
	myVar1: [],
	myVar2: {},
	prosesmesej () {
		if (txtNoTel.text.length){
			const listArr = txtNoTel.text.split(", ")
			for(let i=0;i < listArr.length;i++){
				console.log(i + " - " + listArr[i])
				WhatsApp.run(listArr[i])
				console.log(WhatsApp.data)
				//this.hantarWhatsApp(listArr[i])
				//const element = array[i];
			 }
			txtResult.setValue("Mesej berjaya dihantar")
			return true	
		} else {
			txtResult.setValue("Mesej tidak berjaya dihantar")
			return false
		}
		
	},
	async hantarWhatsApp (notel) {
		//	use async-await or promises
		//	await storeValue('varName', 'hello world')
		const URL = "http://128.199.148.138:5050/chat/sendmessage/" + notel
		console.log(URL)
		await fetch(URL, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
			},
			body: JSON.stringify({
				message: "hello world!!"
			}),
		}).then((response) => {
				console.log("Success:", response.json());
		}).catch((error) => {
				console.error("Error:", error);
		});
	}
}