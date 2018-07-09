FROM makki0205/deploy
WORKDIR C:/Users/showt/go/github.com/HAL-RO-Developer/caseTeamA_web 


ADD ./ ./ 

RUN ls -la 

RUN go get github.com/gin-gonic/gin
RUN npm install
RUN npm run build

EXPOSE 3000 

ENTRYPOINT ["go","run","main.go"]