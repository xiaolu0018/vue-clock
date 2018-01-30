import Vue from 'vue'
import  App from './App'
var myapp=new Vue({
    el:'#app',
    template:'<App v-bind:mytime="mytime" v-bind:mydate="mydate"/>',
    components:{App},
    data(){
        return{
            mytime:'',
            mydate:''
        }
    }
})


var week=['星期日','星期一','星期二','星期三','星期四','星期五','星期六'];
var timeID=setInterval(updateTime,1000);
updateTime();
function updateTime(){
     let cd=new Date();
     myapp.mytime=zeroPadding(cd.getHours(), 2) + ':' + zeroPadding(cd.getMinutes(), 2) + ':' + zeroPadding(cd.getSeconds(), 2);
     myapp.mydate=zeroPadding(cd.getFullYear(), 4) + '-' + zeroPadding(cd.getMonth()+1, 2) + '-' + zeroPadding(cd.getDate(), 2) + ' ' + week[cd.getDay()];


}
function zeroPadding(num, digit) {
    var zero = '';
    for(var i = 0; i < digit; i++) {
        zero += '0';
    }
    return (zero + num).slice(-digit);
}