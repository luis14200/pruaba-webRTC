var languageData;function getTextData(t){var a=$("#myBottomBtn",parent.document).attr("language");return"zh"===a?languageData.zh[t]:"en"===a?languageData.en[t]:void 0}$.ajax({type:"get",url:"webRTC/local/data.json",dataType:"json",async:!1,success:t=>{languageData=t},error:t=>{console.log(t)}}),$("#microphone-text").text(getTextData("L1")),$(".test-btn").text(getTextData("L2")),$("#output-text").text(getTextData("L3")),$(".bottom-call-btn span").text(getTextData("L4")),$(".reload-title").text(getTextData("L5")),$(".reload-describe").text(getTextData("L6")),$(".reload-btn").text(getTextData("L7")),$(".known-btn").text(getTextData("L8"));