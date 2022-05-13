import {Form, Input, Button, Card, InputNumber} from 'antd'
import TextArea from 'antd/lib/input/TextArea';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories, getCategory, addProduct } from '../../../../redux/reducers/productsReducer';

const CreateMenuItem = () => {
 const dispatch = useDispatch()
 const {categories} = useSelector(state => state.productsReducer)
 const {subcategories} = useSelector(state => state.productsReducer)
 const userId = useSelector(state => state.authReducer?.user?.id)
 console.log(userId);
 const [category, setCategory] = useState('')
 const [subcategory, setSubcategory] = useState('')
 const [image, setImage] = useState({})
 const handleClick = () => {
   const subCategoryId = subcategory
   dispatch(addProduct({subCategoryId, userId}))
 }
 useEffect(() => {
   dispatch(getCategories())
 }, [])
 return(
   <Card title='New Menu Item'style={{margin: 20}}>
     <Form name='newProductForm' layout='vertical' wrapperCol={{span: 8}}>
       <Form.Item label='Категория товара' required>
          <select defaultValue={''} onChange={(e) => {
            setCategory(prev => e.target.value)
            dispatch(getCategory(e.target.value))
          }}>
             {categories?.map((ctgry) => <option value={ctgry.categoryName}>{ctgry.categoryName}</option> )}
          </select>
          <select onChange={(e) => {
            setSubcategory(prev => e.target.value)
          }}>
             {subcategories?.map((ctgry) => <option value={ctgry.id}>{ctgry.subCategoryName}</option> )}
          </select>
          <input onChange={(e) => {
            console.log(Array.from(e.target.files)[0])
            setImage(prev => ({...prev, ...Array.from(e.target.files)[0]}))}} name='productPhoto' type="file" />
       </Form.Item>
       <Form.Item label='Описание'required>
          <TextArea rows={4} placeholder='Добавь описание'/>
       </Form.Item>
       <Form.Item label='Цена RUR'required>
          <InputNumber />
       </Form.Item>
       <Form.Item >
          <Button type='button' onClick={handleClick}>Разместить</Button>
       </Form.Item>
     </Form>
   </Card>
 )
}
export default CreateMenuItem;
