import './addSpecialTask.css'

export const AddSpecialTask = ({addSpecialTask}) => {
    return(
        <div>
            <button className='button-add-task add-button' onClick=
            {() => {
                addSpecialTask()
                
            }}>Add Speial Task</button>
        </div>
    )
}