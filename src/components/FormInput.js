
const leaveTypes = [{value: 'Vacation'}, {value: 'Sick'}, {value: 'Personal'}];

export default function FormInput() {
    return (
    <div className="formContainer">
        <form>
            <label>Leave Type*</label>
            <select name="leave-type-dropdown" className="leave-type-dropdown">
                <option value="" disabled selected hidden>Select leave type</option>
                <option value="vacation">Vacation</option>
                <option value="sick">Sick</option>
                <option value="personal">Personal</option>
            </select>
            <div className="dateInput">
                <div className="date">
                    <label>Start Date*</label>
                    <input className="date-input" type="date"></input>
                </div>
                <div className="date">
                    <label>End Date*</label>
                    <input className="date-input" type="date"></input>
                </div>
            </div>
            <label>Reason*</label>
            <textarea placeholder="Provide a brief reason for your leave..." className="reason-textarea" draggable></textarea>
            
            <label>Attach Supporting Document (Optional)</label>
            <input type="file" placeholder="Provide a brief reason for your leave..." className="supporting-doc"></input>

            <div className="submit-cancel-btns">
                <button className='submitBtn' type="button"> Submit Request</button>
                <button className='cancelBtn' type="button"> Cancel</button>
            </div>
        </form>
    </div>)
}