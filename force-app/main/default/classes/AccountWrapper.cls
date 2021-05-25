public class AccountWrapper{
   
    public class ACWrapper{
             string name;
             String Industry;
             list<contacts> contactList;
    
        }
    
        public class contacts{
            String contactName;
            String email;
            
        }
        
        public void myMethod(){
    
            contacts c = new contacts();
            c.contactName = 'Rajesh';
            c.email = 'rajeshemails3@gmail.com';
            contacts c1 = new contacts();
            c1.contactName = 'Rajesh1';
            c1.email = 'rajeshemails31@gmail.com';
            
            List<contacts> newcont = new List<contacts>();
            newcont.add(c);
            newcont.add(c1);
    
             ACWrapper a = new ACWrapper();
            a.name = 'TestAccount';
            a.Industry ='TestIndustry';
            a.contactList = newcont;
            
            for(contacts cc:a.contactList){
                system.debug('cc==>'+cc);
            }
    
        }
    
    
    }
    