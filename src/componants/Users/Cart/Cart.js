import React from 'react';

const Cart = (props) => {
    const yearlySalary = props.users;
    console.log(yearlySalary)
    

    // let salary = 0;
    // for (let i = 0; i < users.length; i++) {
    //     const user = users[i]
    //     const userSalary = user.salary;
    //     salary = salary + Number('4544');
    // }
    const totalSalary = yearlySalary.reduce((sum, users) => sum + users.salary,0);
    const formatNumber = totalSalary.toFixed(2)
    return (
        <div>
            
           <p>Total Total Yearly Salary: ${formatNumber}</p>
        </div>
    );
};

export default Cart;