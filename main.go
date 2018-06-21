package main

import "github.com/gin-gonic/gin"

func main() {
	r := GetRouter()
	r.Run(":8000")
}

func GetRouter() *gin.Engine {
	r := gin.Default()
	r.Static("/js", "./public/js")
	r.Static("/image", "./public/image")
	r.Static("/css", "./public/css")

	r.LoadHTMLGlob("view/*")

	r.NoRoute(func(c *gin.Context) {
		c.HTML(200, "index.html", nil)
	})

	return r

}
