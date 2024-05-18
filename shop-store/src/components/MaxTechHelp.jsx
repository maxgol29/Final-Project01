import React from 'react'
import { MDBAccordion, MDBAccordionItem, MDBContainer } from "mdb-react-ui-kit";
import { useState } from 'react';



const MaxTechHelp = () => {
    const [table, setTable] = useState(false)

    function setTables() {
        if(!table) {
            setTable(true)
        }
        else{
            setTable(false)
        }
    }
// Doesn't work because the MDBAccordion css files interact with index.css
  return (
    <div className='text-center h-[800px]'>
      <h1 className='text-6xl m-16 font-bold'>MAXTECH Help Center</h1>
      <h3 className='text-3xl font-semibold'>Frequently asked questions</h3>
      <div>
        <button className='m-8' onClick={setTables}>General</button>
        <button onClick={setTables}>Setting up FAQs</button>
      </div>
      <div id='content'>
        This is the initial content.
      </div>
        <div>
            {table ? 
            <MDBContainer className="mt-5 w-1/2">
                <MDBAccordion alwaysOpen initialActive={1}>
                    <MDBAccordionItem collapseId={1} headerTitle="Question #1">
                    <strong>This is the first item's accordion body.</strong> It is shown
                    by default, until the collapse plugin adds the appropriate classes
                    that we use to style each element. These classes control the overall
                    appearance, as well as the showing and hiding via CSS transitions. You
                    can modify any of this with custom CSS or overriding our default
                    variables. It's also worth noting that just about any HTML can go
                    within the <code>.accordion-body</code>, though the transition does
                    limit overflow.
                    </MDBAccordionItem>
                    <MDBAccordionItem collapseId={2} headerTitle="Question #2">
                    <strong>This is the second item's accordion body.</strong> It is
                    hidden by default, until the collapse plugin adds the appropriate
                    classes that we use to style each element. These classes control the
                    overall appearance, as well as the showing and hiding via CSS
                    transitions. You can modify any of this with custom CSS or overriding
                    our default variables. It's also worth noting that just about any HTML
                    can go within the <code>.accordion-body</code>, though the transition
                    does limit overflow.
                    </MDBAccordionItem>
                    <MDBAccordionItem collapseId={3} headerTitle="Question #3">
                    <strong>This is the third item's accordion body.</strong> It is hidden
                    by default, until the collapse plugin adds the appropriate classes
                    that we use to style each element. These classes control the overall
                    appearance, as well as the showing and hiding via CSS transitions. You
                    can modify any of this with custom CSS or overriding our default
                    variables. It's also worth noting that just about any HTML can go
                    within the <code>.accordion-body</code>, though the transition does
                    limit overflow.
                    </MDBAccordionItem>
                </MDBAccordion>
            </MDBContainer> 
            : 'Hello'}
        </div>
    </div>
  )
}

export default MaxTechHelp
