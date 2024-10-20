import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useParams, useNavigate } from 'react-router-dom';
import { UserFormInterface } from "../../interfaces/user";
import { Form, FormGrid, FormGroup, SubmitButton, Checkbox, TextArea, Input, Label, Container, ValidationError } from '../../styles/form';
import { useDispatch, useSelector } from 'react-redux';
import { readOneThunk, updateOneThunk, createOneThunk } from "../../slices/UserSlice/userThunks"; 
import { AppDispatch, RootState } from '../../store';
import Swal from 'sweetalert2';
import { LoaderComponent } from '../../components/Loader';


export const UserForm: React.FC = () => {
  const { id: userId } = useParams<{ id: string }>(); 
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const { single, status } = useSelector((state: RootState) => state.user); 
  
  const [formData, setFormData] = useState<UserFormInterface>({
    firstname: "",
    lastname: "",
    email: "",
    phonenumber: "",
    password: "",
    joindate: new Date(),
    status: false,
    jobdesk: "",
    photourl: "",
    description: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({}); 

  const parseDate = (dateString: Date | undefined) => {
    return dateString ? new Date(dateString) : new Date();
  };

  useEffect(() => {
    if (userId) {
      dispatch(readOneThunk(userId));
    }
  }, [userId, dispatch]);

  useEffect(() => {
    if (single && userId) {
      setFormData({
        firstname: single.firstname || "",
        lastname: single.lastname || "",
        email: single.email || "",
        phonenumber: single.phonenumber || "",
        password: "",
        joindate: parseDate(single.joindate),
        status: single.status || false,
        jobdesk: single.jobdesk || "",
        photourl: single.photourl || "",
        description: single.description || "",
      });
    }
  }, [single, userId]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
  
    if (e.target instanceof HTMLInputElement && type === "checkbox") {
      setFormData({
        ...formData,
        [name]: e.target.checked, 
      });
    } else {
      setFormData({
        ...formData,
        [name]: value, 
      });
    }
  
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };
  

  const handleDateChange = (date: Date | null) => {
    if(!date) return;
    setFormData({ ...formData, joindate: date });
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    
    if (!formData.firstname) newErrors.firstname = 'First Name is required';
    if (!formData.lastname) newErrors.lastname = 'Last Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.phonenumber) newErrors.phonenumber = 'Phone Number is required';
    if (!userId && !formData.password) newErrors.password = 'Password is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; 
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      const dataToSubmit = { ...formData };
      if (!formData.password) {
        delete dataToSubmit.password;
      }

      if (userId) {
        dispatch(updateOneThunk({ id: userId, user: dataToSubmit }))
          .unwrap()
          .then(() => {
            navigate("/employees");
            Swal.fire({
              title: 'Employee Updated!',
              text: 'Employee has been updated successfully.',
              icon: 'success',
              timer: 2000, 
              showConfirmButton: false, 
            });
          })
          .catch((error) => {
            Swal.fire({
              title: 'Error!',
              text: error.message || 'Failed to update employee. Please try again.',
              icon: 'error',
              timer: 3000,
              showConfirmButton: false,
            });
          });
      } else {
        dispatch(createOneThunk(dataToSubmit))
          .unwrap()
          .then(() => {
            navigate("/employees");
            Swal.fire({
              title: 'Employee Created!',
              text: 'Employee has been created successfully.',
              icon: 'success',
              timer: 2000,
              showConfirmButton: false,
            });
          })
          .catch((error) => {
            Swal.fire({
              title: 'Error!',
              text: error.message || 'Failed to create employee. Please try again.',
              icon: 'error',
              timer: 3000,
              showConfirmButton: false,
            });
          });
      }
    }
  };

  return (
    <Container>
      {status === 'loading' ? (
        <LoaderComponent />
      ) : (
      <Form onSubmit={handleSubmit}>
        <FormGrid>
          <FormGroup>
            <Label>First Name:</Label>
            <Input
              type="text"
              name="firstname"
              value={formData.firstname}
              onChange={handleChange}
              placeholder={userId ? single?.firstname || "" : "Enter first name"}
            />
            {errors.firstname && <ValidationError className="error">{errors.firstname}</ValidationError>}
          </FormGroup>

          <FormGroup>
            <Label>Last Name:</Label>
            <Input
              type="text"
              name="lastname"
              value={formData.lastname}
              onChange={handleChange}
              placeholder={userId ? single?.lastname || "" : "Enter last name"}
            />
            {errors.lastname && <ValidationError className="error">{errors.lastname}</ValidationError>}
          </FormGroup>

          <FormGroup>
            <Label>Email:</Label>
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder={userId ? single?.email || "" : "Enter email"}
            />
            {errors.email && <ValidationError className="error">{errors.email}</ValidationError>}
          </FormGroup>

          <FormGroup>
            <Label>Phone Number:</Label>
            <Input
              type="text"
              name="phonenumber"
              value={formData.phonenumber}
              onChange={handleChange}
              placeholder={userId ? single?.phonenumber || "" : "Enter phone number"}
            />
            {errors.phonenumber && <ValidationError className="error">{errors.phonenumber}</ValidationError>}
          </FormGroup>

          <FormGroup>
            <Label>Password:</Label>
            <Input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter new password"
            />
            {errors.password && <ValidationError className="error">{errors.password}</ValidationError>}
          </FormGroup>

          <FormGroup>
            <Label>Join Date:</Label>
            <DatePicker
              selected={formData.joindate}
              onChange={handleDateChange}
              dateFormat="yyyy-MM-dd"
              customInput={<Input />}
            />
          </FormGroup>

          <FormGroup>
            <Label>Job Desk:</Label>
            <Input
              type="text"
              name="jobdesk"
              value={formData.jobdesk}
              onChange={handleChange}
              placeholder={userId ? single?.jobdesk || "" : "Enter job desk"}
            />
          </FormGroup>

          <FormGroup>
            <Label>Photo URL:</Label>
            <Input
              type="text"
              name="photourl"
              value={formData.photourl}
              onChange={handleChange}
              placeholder={userId ? single?.photourl || "" : "Enter photo URL"}
            />
          </FormGroup>

          <FormGroup>
            <Label>Description:</Label>
            <TextArea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder={userId ? single?.description || "" : "Enter description"}
              rows={4}
            />
          </FormGroup>

          <FormGroup>
            <Label>Status:</Label>
            <Checkbox
              type="checkbox"
              name="status"
              checked={formData.status}
              onChange={handleChange}
            />
            Active
          </FormGroup>
          <div></div>
          <div>
            <SubmitButton type="submit">
              {userId ? "Update User" : "Create User"}
            </SubmitButton>
          </div>
        </FormGrid>
      </Form>)}
    </Container>
  );
};
