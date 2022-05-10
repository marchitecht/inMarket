import {Form, Input, Button, Card, InputNumber} from 'antd'
import TextArea from 'antd/lib/input/TextArea';

const CreateMenuItem = () => {
 return(
   <Card title='New Menu Item'style={{margin: 20}}>
     <Form layout='vertical' wrapperCol={{span: 8}}>
       <Form.Item label='Название товара' required>
          <Input placeholder='Выбери категорию товара'/>
       </Form.Item>
       <Form.Item label='Описание'required>
          <TextArea rows={4} placeholder='Добавь описание'/>
       </Form.Item>
       <Form.Item label='Цена RUR'required>
          <InputNumber />
       </Form.Item>
       <Form.Item >
          <Button type='primary'>Разместить</Button>
       </Form.Item>
     </Form>
   </Card>
 )
}
export default CreateMenuItem;
