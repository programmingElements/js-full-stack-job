import { useState } from "react";

const allColumns = [
    {
        id: 4893, title: "Username"
    },
    {
        id: 3829, title: "Address"
    },
    {
        id: 2746, title: "Email"
    },
    {
        id: 1567, title: "Phone Number"
    },
    {
        id: 8204, title: "Date of Birth"
    },
    {
        id: 4932, title: "Gender"
    },
    {
        id: 6378, title: "Country"
    },
    {
        id: 7291, title: "City"
    },
    {
        id: 1045, title: "Zip Code"
    },
    {
        id: 8463, title: "Occupation"
    },
    {
        id: 2087, title: "Education"
    },
    {
        id: 9352, title: "Hobbies"
    },
    {
        id: 5418, title: "Subscription status"
    },
    {
        id: 3729, title: "Last Login Date"
    },
    {
        id: 6821, title: "Account Status"
    },
    {
        id: 9156, title: "Registration Date"
    },
    {
        id: 3871, title: "Profile Picture"
    },
    {
        id: 6248, title: "Bio"
    },
    {
        id: 7392, title: "Language Preference"
    },
    {
        id: 1825, title: "Notification Preference"
    },
    {
        id: 1460, title: "Company Name"
    },
    {
        id: 2019, title: "Experience"
    }
]

const directions = {
    left: "left",
    right: "right"
}

function ColumnSelector() {
    // leftColumns, rightColumns
    // left selections, right selections

    const [leftColumns, setLeftColumns] = useState(allColumns);
    const [rightColumns, setRightColumns] = useState([]);

    const [selections, setSelections] = useState({
        [directions.left]: new Set(),
        [directions.right]: new Set()
    })

    const toggleSelection = (columnId, direction) => {
        if (selections[direction].has(columnId)) {
            selections[direction].delete(columnId);
        } else {
            selections[direction].add(columnId);
        }
        setSelections({...selections});
    }

    const moveRight = () => {
        // leftColumns = [3, 4, 10, 23] => [3, 4, 23]
        // leftSelections = [ 10 ]
        setLeftColumns(
            leftColumns.filter((c) => {
                if (selections[directions.left].has(c.id)){
                    rightColumns.push(c);
                    return false;
                } else {
                    return true;
                }
            })
        );
        selections[directions.left].clear();
    };

    const moveLeft = () => {
        // rightColumns = [2, 5, 11, 21] => [2, 11, 21]
        // rightSelections = [ 5 ]
        setRightColumns(
            rightColumns.filter((c) => {
                if (selections[directions.right].has(c.id)) {
                    leftColumns.push(c);
                    return false;
                } else {
                    return true;
                }
            })
        );
        selections[directions.right].clear();
    };


    return (
        <div className="h-screen fixed top-0 left-0 right-0 bottom-0 bg-gray-300 flex justify-center items-center">
            <div className="w-[400px] h-[200px] bg-white rounded-md flex p-2 gap-2">
                <div id="lbox" className="w-[45%] flex flex-col overflow-y-scroll gap-1 px-2">
                    {
                        leftColumns.map((c) => {
                            const isSelected = selections[directions.left].has(c.id);
                            return <button key={c.id} onClick={() => toggleSelection(c.id,directions.left)} className={`text-xs p-[4px] border-none text-left cursor-pointer hover:bg-[#c6c4c4] ${isSelected ? 'bg-[#659fef]': ''} `}>{c.title}</button>
                        })
                    }
                </div>
                <div id="seperator" className="flex flex-col justify-center gap-3 px-[2px] shadow-md">
                    <button 
                    className="material-icons disabled:text-[#e3e3e3]" 
                    disabled={selections[directions.left].size === 0}
                    onClick={moveRight}
                    >
                        chevron_right
                    </button>
                    <button 
                    className="material-icons disabled:text-[#e3e3e3]" 
                    disabled={selections[directions.right].size === 0}
                    onClick={moveLeft}
                    >
                        chevron_left
                    </button>
                </div>
                <div id="rbox" className="w-[45%] flex flex-col overflow-y-scroll gap-1 px-2">
                {
                        rightColumns.map((c) => {
                            const isSelected = selections[directions.right].has(c.id);
                            return <button key={c.id} onClick={() => toggleSelection(c.id,directions.right)} className={`text-xs p-[2px] border-none text-left cursor-pointer hover:bg-[#c6c4c4] ${isSelected ? 'bg-[#a8c6ef]' : ''} `}>{c.title}</button>
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default ColumnSelector;