import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import CreateIcon from '@mui/icons-material/Create';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { NavLink } from 'react-router-dom';
import { useState, useEffect } from "react";
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd'
import { DateRangePicker } from "react-date-range";
const Table = (props) => {



    const [getuserdata, setUserdata] = useState([]);
    const [allUserdata, setAllUserdata] = useState([]);

    const items = getuserdata.length;

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    const getData = async () => {
        const res = await fetch("https://todolist-api-6olz.onrender.com/", {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });
        const data = await res.json();
        if (res.status === 400 || !data) {
            console.log("error ");

        } else {
            setUserdata(data)
            setAllUserdata(data);

        }
    }

    useEffect(() => {
        getData();
    }, []);
    props.alert(items);

    const deleteUser = async (id) => {
        const res2 = await fetch(`https://todolist-api-6olz.onrender.com/deleteUser/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }

        });
        const deleteData = await res2.json();
        console.log(deleteData);

        if (res2.status === 422 || !deleteData) {
            console.log("error");
        }
        else {
            console.log("Todo deleted");
            getData();
        }
    }

    const handleDragEnd = (results) => {
        let tempUser = [...getuserdata];
        let [selectedRow] = tempUser.splice(results.source.index, 1);
        tempUser.splice(results.destination.index, 0, selectedRow);
        setUserdata(tempUser);
    }

    const handleSelect = (date) => {
        let filtered = allUserdata.filter((item) => {
            let itemDate = new Date(item.createdAt);
            return (
                itemDate >= date.selection.startDate && itemDate < date.selection.endDate
            );
        });
        setStartDate(date.selection.startDate);
        setEndDate(date.selection.endDate);
        setUserdata(filtered);
    }

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: 'selection',
    }


    const handleCheckBox = (id) => {
        console.log(id);
        const newTodoList = getuserdata.map(todo => {
            if (todo._id === id)
                return { ...todo, done: !todo.done }
            return todo;
        })
        setUserdata(newTodoList);
    }




    return (
        <>

            <DateRangePicker
                ranges={[selectionRange]}
                onChange={handleSelect}
            />

            <div className="mt-5">
                <div className="container">
                    <div className="add_btn mt-2 mb-2">
                        <NavLink to="/form" className="btn btn-primary">Add data</NavLink>
                    </div>

                    <DragDropContext onDragEnd={(results) => handleDragEnd(results)}>
                        <p><b> Drag table using Check column..........</b></p>
                        <table class="table">
                            <thead>
                                <tr className="table-dark">
                                    <th scope="col">Check</th>
                                    <th scope="col">Title</th>
                                    <th scope="col">Description</th>
                                    <th scope="col">DueDate</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">TimeStamp</th>
                                    <th scope="col"></th>
                                </tr>
                            </thead>

                            <Droppable droppableId="tbody">
                                {
                                    (provided) => (
                                        <tbody ref={provided.innerRef} {...provided.droppableProps}>
                                            {
                                                getuserdata.map((element, index) => {
                                                    let date = new Date(element.createdAt);
                                                    return (
                                                        <>
                                                            <Draggable key={element._id}
                                                                draggableId={element._id}
                                                                index={index}>
                                                                {
                                                                    (provided) => (
                                                                        <tr ref={provided.innerRef}
                                                                            {...provided.draggableProps}
                                                                        >
                                                                            {/* <th scope="row"  {...provided.dragHandleProps}>{index + 1}</th> */}
                                                                            <td {...provided.dragHandleProps}>
                                                                                <input type="checkbox" style={{ margin: "0 10px" }} onClick={() => handleCheckBox(element._id)} checked={element.done} onChange={() => console.log("id")} />
                                                                            </td>

                                                                            <td style={element.done ? { textDecoration: "line-through" } : null} >{element.title}</td>
                                                                            <td style={element.done ? { textDecoration: "line-through" } : null}>{element.description}</td>
                                                                            <td style={element.done ? { textDecoration: "line-through" } : null}>{element.dueDate}</td>
                                                                            <td style={element.done ? { textDecoration: "line-through" } : null}>{element.status}</td>
                                                                            <td style={element.done ? { textDecoration: "line-through" } : null}>{date.toLocaleDateString()}</td>
                                                                            <td className="d-flex justify-content-between">
                                                                                <NavLink to={`edit/${element._id}`}>  <button className="btn btn-primary"><CreateIcon /></button></NavLink>
                                                                                <button className="btn btn-danger" onClick={() => deleteUser(element._id)}><DeleteOutlineIcon /></button>
                                                                            </td>

                                                                        </tr>

                                                                    )
                                                                }
                                                            </Draggable>

                                                        </>
                                                    )
                                                })
                                            }
                                            {provided.placeholder}

                                        </tbody>
                                    )
                                }
                            </Droppable>

                        </table>
                    </DragDropContext>


                </div>
            </div>
        </>

    )
}

export default Table