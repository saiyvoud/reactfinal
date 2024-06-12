import React, { useEffect } from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const DropDownCheckBox = ({data, options = {}, onChecklistChange = () => {}, placeholder = "--", disable = false}) => {
    const [checked, setChecked] = React.useState([]);
    const [open, setOpen] = React.useState(false);

    const handleCheckBoxChange = (e) => {
        if(e.target.checked){
            setChecked([...checked, e.target.value])
        }else{
            setChecked(checked.filter(item => item !== e.target.value))
        }
    }

    useEffect(() => {
        onChecklistChange(checked)
    }, [checked])

    const onOpen = () => {
        if(disable) return
        setOpen(!open)
    }

  return (
    <div>
        <div className={`selectBox w-full p-3 rounded-md border border-gray-200 flex justify-between ${(disable) ? " text-gray-400" : "cursor-pointer text-gray-800" }`} onClick={onOpen}>
            {
                (checked.length > 0) ? (
                    <p className='text-blue-800 font-bold'>{checked.length}</p>
                ) : (
                    <p>{placeholder}</p>
                )
            }
            <span>
                <KeyboardArrowDownIcon/>
            </span>
        </div>
        {(open) && (
            <div className='w-full min-h-8 border p-2 rounded-md'>
                {
                    (data.map((item, index) => (
                        <div className={`${(index === data?.length - 1) ? "" : "border-b border-gray-200" }`} key={index}>
                            <label htmlFor={index}  className='flex items-center gap-2 hover:bg-gray-50 cursor-pointer px-2 py-3 rounded-md' onChange={handleCheckBoxChange}>
                                <input type="checkbox" id={index} value={item[options?.key]} defaultChecked={checked.includes(item[options?.key])}/>
                                {options?.render(item)}
                            </label>
                        </div>
                    )))
                }
            </div>
        )}
    </div>
  )
}

export default DropDownCheckBox