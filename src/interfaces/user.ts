export interface UserInterface {
  _id: string;               
  firstname: string;        
  lastname: string;         
  email: string;            
  status: boolean;          
  phonenumber: string;      
  joindate: Date;   
  password?: string;          
  photourl?: string;
  description?: string;        
  jobdesk?: string;        
}

export interface CreateUser {
  firstname: string;
  lastname: string;
  email: string;
  phonenumber: string;     
  password: string;      
  joindate: Date;
  status?: boolean;
  days?: string;
  photourl?: string;
  description?: string;
  hours?: string;
  jobdesk?: string;
}

export interface UserFormInterface {
  firstname: string;
  lastname: string;
  email: string;
  phonenumber: string;     
  joindate: Date;
  password?: string;      
  status?: boolean;
  photourl?: string;
  description?: string;
  jobdesk?: string;
}

