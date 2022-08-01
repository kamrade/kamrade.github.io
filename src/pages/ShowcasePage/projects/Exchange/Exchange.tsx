import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {Button, Card, Dropdown, DropdownOption, DropdownToggler, Modal} from 'shared';

export default function Exchange() {

  const values = ['Setting', 'Profile', 'Sign Out'];
  const [valueIndex, setValueIndex] = useState<number>(0);
  const [modal, setModal] = useState(false);

  const setActive = (i: number) => {
    setValueIndex(i);
  }

  return (
    <div className="page">
      <div className="container">
        <header className="pt-5 pb-3" />
        <h1 className='mb-3 page-title'>Exchange Page</h1>


        <div className="mb-3">

          <Dropdown>
            {{
              toggler:
                <DropdownToggler>
                  <b>{values[valueIndex]}</b>
                </DropdownToggler>,
              content:
                values.map((val: string, i: number) =>
                  <DropdownOption active={i === valueIndex} key={i} onClick={() => setActive(i)}>
                    {val}
                  </DropdownOption>)
            }}
          </Dropdown>
        </div>


        <div className="mb-3">
          <Dropdown>
            {{
              toggler:
                <DropdownToggler>
                  <b>Username: Milq</b>
                </DropdownToggler>,
              content:
                  [<DropdownOption> <Link to={'/setting'}>Setting</Link> </DropdownOption>]
            }}
          </Dropdown>
        </div>


        <p>Text after</p>

        <Card>{{
          header: (<div>Header</div>),
          content: (<div>Content</div>),
          actions: (<div><Button block={true} theme={'base'}>Close</Button></div>)
        }}</Card>

        <div className="my-5">
          <Button onClick={() => setModal(true)}>ShowModal</Button>
          <Modal showModal={modal} setModal={setModal}/>
        </div>


      </div>
    </div>
  )
}
