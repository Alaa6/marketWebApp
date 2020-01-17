import React from "react";
import Footer from '../Components/footer'
import { useRouteMatch, useParams} from 'react-router-dom'




  

 
class Home extends React.Component{

    constructor() {
        super();
        this.state = {
            StateResult:[]
          
        };
    }

    componentDidMount() {
        var that = this;
        var url = `https://randomuser.me/api/?page=${this.state.page}&results=10` ;
        console.log("-----------url:"+url);

        fetch(url ,{method :'Get'})
        .then(function(response){ 
            return response.json();})

        .then(function(result){
           that.setState({StateResult : [...that.state.StateResult,...result.results] })
            console.log(result.results);
    
         })
         .catch(function(error){
             console.log("-------- error ------- "+error);
             alert('result :'+ error);
         });


    }

   
  render() {
      const  {StateResult}= this.state

      console.log('hey    ' +StateResult);

      const SimpleList = () => (


        <div className="body">
          {StateResult.map(function(item) {
            return (
                <div  className='list-row ' style={{paddingRight:40}} >
                    <div  style={{margin: 20 }}>

                        <img src={item.picture.large}  alt="Logo"  />
                        <h3 >{'name : '+item.name.first} </h3>

                    </div>
                     

                </div>
                
           
            )
          })}
        </div>
      );
      
  
      return (
          <div className="App" >
              <h3 className='about-comp-word'> عن الشركة</h3>
           <p style={{ textAlign:'end' ,marginRight:50,paddingRight:20}}>هي امتداد لمؤسسة صالح العثيم التجارية، التي أسسها في عام 1376هـ (1956م) الشيخ الراحل/ صالح العثيم " يرحمه الله "حيث افتتحت تلك المؤسسة موقعها الأول في قلب
                منطقة العمل التجاري آنذاك بحلة القصمان في البطحاء، وعملت في تجارة المواد الغذائية وفي عام 1401 هـ / 1980 م تم تأسيس شركة أسواق عبدالله العثيم التجارية لتواصل المسيرة
                في بتوسيع العمل وفتح مراكز للبيع بالجملة والتجزئة. كانت نقطة التحول الكبرى في مسيرة الشركة في العام 1410 هـ / 1990 م وعندما وصل عدد الأسواق إلى أربعة عشر سوقاً ,
                حيث تم تطبيق نظام " جملة المستهلك " على كافة الأسواق التابعة للشركة وبذلك أصبحت أسواق عبدالله العثيم من الأسواق الرائدة في هذا المجال.
                في عام 1412هـ (1992م) تم افتتاح مستودعات كبيرة بمعايير عالية في التخزين لدعم نمو وتطور هذه الشركة بمراكزها المتعددة، وقد جهزت هذه المستودعات بأحدث 
               أساليب التخزين الجاف والمبرد، كما تم زيادة أسطول سيارات التوزيع لرفع مستوى الخدمة المقدمة للعملاء، وتسهيل التعاون مع الموردين. تواصل الشركة 
               استراتيجيتها التوسعية وزيادة قاعدة الفروع على مستوى المملكة وفق رؤية متكاملة واهتمام يتجدد بتقديم خدمات متميزة وشاملة</p>

               <h3 style={{color:'#7ac142' , textAlign:'end' ,marginRight:50 ,paddingRight:20}}>طاقم العمل </h3>
              {SimpleList()}


              <div >
                

        {/* <ul>
          {StateResult.map(item => (
            <li key={item.name}>{item.name} </li>
          ))}
        </ul> */}
              {/* <img src={{uri : StateResult.picture.thumbnail}}  alt="Logo"  />
                 
                  <h3 >{'name :'+StateResult.name} </h3> */}

            </div>
           
            
              
          </div>
      );
  }
}
 
export default Home;