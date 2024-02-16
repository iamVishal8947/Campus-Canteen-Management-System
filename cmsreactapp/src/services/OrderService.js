import axios from 'axios';
const baseUrl="http://localhost:9090/orders"
class OrderService{
    constructor(){
        this.orderdummy={
            orderId: null, 
            time: new Date().toISOString(),
            paymentMethod: "",
            amount: 0, // 
            transactionId: "", 
            itemsServed: 0, 
            isServed: false,
            orderStatus: "", 
            discountPercentage: 0, 
            student: {
              // Details of the student associated with the order
              // This should match the structure of your Student entity
              // For example:
              studentId: null,
              // Other properties of Student
            },
            carts: [
              {
                // Details of each cart item associated with the order
                // This should match the structure of your Cart entity
                // For example:
                cartId: null,
                // Other properties of Cart
              }
              // Add more cart items as needed
            ]
          };
    }
    getAllOrders(){
        //return this.prodarr;
       // return axios.get(baseUrl);
       return axios.get("http://localhost:8282/orders")
    }
    insertOrder(order){
        console.log("in service add")
       //this.prodarr.push(order);
       //console.log(this.prodarr);
       return axios.post(baseUrl+"/order/"+order.pid,order)//,{header:{"content-type":"application/json",autherization:"bearer"+<localStorage.jwttoken>}})
    }

    deleteorder(pid){
       // let pos=this.prodarr.findIndex(p=>p.pid==pid);
       // this.prodarr.splice(pos,1);
       return axios.delete(baseUrl+"/order/"+pid)
    }
    getOrderById(id){
       // return this.prodarr.find(p=>p.pid==id);
       return axios.get(baseUrl+"/order/"+id)
    }
    updateorder(prod){
        //let pos=this.prodarr.findIndex(p=>p.pid==prod.pid);
       // this.prodarr.splice(pos,1,{...prod});
       return axios.put(baseUrl+"/order/"+prod.pid,prod)//,{header:{"content-type":"application/json",autherization:"bearer"+<localStorage.jwttoken>}})
    }

}

export default new OrderService();