import {Form, Input, Card, Button} from 'antd' 

const Settings = () => {
  return (
    <Card title="О продавце" style={{margin: 20}}>
      <Form layout='vertical' wrapperCol={{span: 8}}>
        <Form.Item label='Имя продавца' required>
          <Input placeholder='Ваше имя'/>
        </Form.Item>
        <Form.Item label='Адрес продавца' required>
          
        </Form.Item>
        <Form.Item>
          <Button type='primary'>Подтвердить</Button>
        </Form.Item>
      </Form>
    </Card>
  )
}
export default Settings
