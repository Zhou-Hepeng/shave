import axios from 'axios'
export default {
  methods: {
      ajax(url,data,success,error){
        axios({
            method: 'post',
            // http://topic.360che.com
            url: `https://topic.360che.com${url}`,
            data: data,
            // headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        })
        .then(success)
        .catch(error)
      },
      //补全字符串
      uidPadLeft(uid,n){   // 补全字符串
        uid = "0" + uid.toString();
        if(uid.length < n){
           return this.uidPadLeft(uid,n)
        }
        return uid
      },
  },
}