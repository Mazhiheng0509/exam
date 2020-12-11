import Mock from "mockjs";


Mock.mock("/api/getData", () => {
    return Mock.mock({
        "list|6": [{
            "img": "@image(100x100,@color)",
            "title": "我的同桌",
            "info": "作业学完没  666",
            "time":"17:00"
        }]
    })
})