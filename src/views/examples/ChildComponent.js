import React from "react";

class ChildComponent extends React.Component {

    render() {
        //kiểm tra dữ liệu truyền từ cha sang con
        //console.log('check props:', this.state)
        console.log('check props:', this.props)
        //let name = this.props.name
        //cú pháp đơn giản - dùng key giống trong object
        let { name, age, address, job } = this.props
        let a = ''
        return (<div className="">ChildComponent:{name}-{age}-{address}
            {
                a = job.map((item, index) => {
                    if (item.salary > 200) {
                        return (<div key={item.id}>{item.title} - {item.salary}</div>)
                    }

                })
            }
            {console.log('array', a)}
        </div>
        )


    }
}
export default ChildComponent