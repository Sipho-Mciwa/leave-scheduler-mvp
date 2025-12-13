import { useState } from "react";
import { makeRequest } from "../services/api";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from 'react-router-dom';



export default function FormInput() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        leaveType: '',
        startDate: '',
        endDate: '',
        reason: '',
        doc: null
    });
    const [errors, setErrors] = useState({});
    const [disableBtn, setDisableBtn] = useState(false);


    const handleInputChange = (event) => {
        const {name, value} = event.target;

        setFormData({
            ...formData,
            [name]: value
        });
    };

    const validateForm = () => {
        let isValid = true;
        const newErrors = {};

        //Validate leave Type
        if (!formData.leaveType) {
            newErrors.leaveType = 'Leave type is required';
            isValid = false;
        }

        //Validate start date
        if (!formData.startDate) {
            newErrors.startDate = 'Start date is required';
            isValid = false;
        }

        //Validate end date
        if (!formData.endDate) {
            newErrors.endDate = 'End date is required';
            isValid = false;
        }

        //Validate reason
        if (!formData.reason) {
            newErrors.reason = 'Reason is required';
            isValid = false;
        }

        setErrors(newErrors);
        return (isValid);
    };

    const handleSubmit = async (e) => {

        e.preventDefault();
        if (validateForm()) {
            //Form is valid, you can submit or process data her
            console.log("Form data:", formData);
            const message = await makeRequest(formData);

            if (message.status === 201) {
                showSuccessToastMessage(message.data.message);
                navigate("/dashboard");
            } else {
                console.log(message);
            }
            setDisableBtn(true);
        } else {
            // Form is not valid, display error messages.
        }

    };

    const isFormValid = Object.keys(errors).length === 0;

    const showSuccessToastMessage = (msg) => {
        toast.success(msg, {
            position: "top-right",
            autoClose: 1000,
            progress: false
        });
    };

    const handleFileChange = (event) => {
    // Access the selected file from the event target
    const file = event.target.files[0];
    setFormData({
        ...formData,
        "doc": file
    });
    // setUploadStatus('');
  };

    return (
    <div className="formContainer">
        <form>
            <label>Leave Type*</label>
            <select className={isFormValid ? "leave-type-dropdown" : "error-leave-type-dropdown"} name="leaveType" value={formData.leaveType} onChange={handleInputChange}>
                <option value="" disabled defaultValue={"Select leave type"} hidden>Select leave type</option>
                <option value="vacation">Vacation</option>
                <option value="sick">Sick</option>
                <option value="personal">Personal</option>
            </select>
            {!isFormValid && <p className='errorMsg'>{errors.leaveType}</p>}

            <div className="dateInput">
                <div className="date">
                    <label>Start Date*</label>
                    <input className={isFormValid ? "date-input" : "error-date-input"} type="date" name="startDate" value={formData.startDate} onChange={handleInputChange}></input>
                </div>
                <div className="date">
                    <label>End Date*</label>
                    <input className={isFormValid ? "date-input" : "error-date-input"} type="date" name="endDate" value={formData.endDate} onChange={handleInputChange}></input>
                </div>
            </div>

            <label>Reason*</label>
            <textarea placeholder="Provide a brief reason for your leave..." className={isFormValid ? "reason-textarea" : "error-reason-textarea"} draggable name="reason" value={formData.reason} onChange={handleInputChange}></textarea>
            {!isFormValid && <p className='errorMsg'>{errors.reason}</p>}

            <label>Attach Supporting Document (Optional)</label>
            <input type="file" placeholder="Provide a brief reason for your leave..." className="supporting-doc" name="doc" onChange={handleFileChange}></input>

            <ToastContainer />

            <div className="submit-cancel-btns">
                <button className={'submitBtn'} type="button" onClick={handleSubmit} disabled={disableBtn}> Submit Request</button>
                <button className='cancelBtn' type="button"> Cancel</button>
            </div>
        </form>
    </div>)
}