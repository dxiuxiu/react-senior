import React, { useState } from 'react'
import './index.less'

import ReactSwipe from 'react-swipe'



const Category = () => {
    const [category, setCategory] = useState(0)

    let reactSwipeEl

    const opt = {
        continuous: false,
        // auto: 2000,
        callback: function (index) {
            setCategory(index)
        }
    }

    return (
        <div>
            <ReactSwipe
                className='category'
                swipeOptions={opt}
                ref={el => (reactSwipeEl = el)}
            >
                <div>
                    PANE 0
            </div>
                <div>PANE 1</div>
                <div>PANE 2</div>
                <div>PANE 3</div>
                <div>PANE 4</div>
                <div>PANE 5</div>
            </ReactSwipe>
            <button onClick={() => reactSwipeEl.next()}>Next</button>
            <button onClick={() => reactSwipeEl.prev()}>Previous</button>
            <div>
                {category}
            </div>
        </div>
    )
}

export default Category


// import React from 'react'
// import './index.less'

// import ReactSwipe from 'react-swipe'



// class Category extends React.Component {

//     reactSwipeEl
//     constructor(props) {
//         super(props)
//         this.state = {
//             categoryIndex: 0
//         }
//     }



//     render() {

//         const opt = {
//             continuous: false,
//             // auto: 2000,
//             callback:  (index) => {

//                 console.log(index)

//                 this.setState({
//                     categoryIndex: index
//                 })

//             } // .bind(this)
//         }

//         return (
//             <div>
//                 <ReactSwipe
//                     className='category'
//                     swipeOptions={opt}
//                     ref={el => (this.reactSwipeEl = el)}
//                 >
//                     <div>
//                         PANE 0
//               </div>
//                     <div>PANE 1</div>
//                     <div>PANE 2</div>
//                     <div>PANE 3</div>
//                     <div>PANE 4</div>
//                     <div>PANE 5</div>
//                 </ReactSwipe>
//                 <button onClick={() => this.reactSwipeEl.next()}>Next</button>
//                 <button onClick={() => this.reactSwipeEl.prev()}>Previous</button>
//                 <div>
//                     {this.state.categoryIndex}
//                 </div>
//             </div >
//         )
//     }
// }

// export default Category