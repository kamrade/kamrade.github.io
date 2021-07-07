import React, {useState, ChangeEvent} from 'react';
import { Button } from 'shared/Button/Button';
import { Input } from 'shared/Input/Input';
import { Card } from 'shared/Card/Card';


export default function Wheelson() {

  const [value, setValue] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }

  const handleSubmit = () => {
    console.log(value);
  }

  return (
    <div className="page">

      <header className="pt-5 pb-3" />

      <div className="container">
        <h1 className='mb-3 page-title'>Wheelson Page</h1>

        <div className='d-flex mb-3'>
          <span style={{width: '100%'}} className='mr-1'>
            <Input placeholder='Enter value' value={value} onChange={handleChange} />
          </span>
          <Button theme='dark' onClick={handleSubmit}>Submit</Button>
        </div>

        <div className='mb-3'>
          <Card>
            <>The value = {value}</>
          </Card>
        </div>

        <div className='mb-3'>
          <Card>
            {{
              header: 'Another Card',
              content: (<p>Test message</p>),
              actions: (<><Button theme='dark'>Test</Button></>)
            }}
          </Card>
        </div>

      </div>
    </div>
  )
}
