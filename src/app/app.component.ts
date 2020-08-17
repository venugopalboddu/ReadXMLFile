import { Component, OnInit } from '@angular/core';
import { XmlReadApiService } from './xml-read-api.service';
import xml2js from 'xml2js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ReadXml';
  xmlItems: any;

  constructor(private service: XmlReadApiService) { }
  ngOnInit() {
    this.loadXML();
 }

 loadXML()
 {
   this.service.GetXmlApi().subscribe((data)=>{
     console.log("XmlData:", data);
    this.parseXML(data)  
    .then((data) => {  
      this.xmlItems = data;
      console.log("JSON:", this.xmlItems);  
    });
   });
 }
 parseXML(data) {  
  return new Promise(resolve => {  
    var k: string | number,  
      arr = [],  
      parser = new xml2js.Parser(  
        {  
          trim: true,  
          explicitArray: true  
        });  
    parser.parseString(data, function (err, result) {  
      var obj = result.Employee;  
      for (k in obj.emp) {  
        var item = obj.emp[k];  
        arr.push({  
          id: item.id[0],  
          name: item.name[0],  
          gender: item.gender[0],  
          mobile: item.mobile[0]  
        });  
      }  
      resolve(arr);  
    });  
  });  
}
}
