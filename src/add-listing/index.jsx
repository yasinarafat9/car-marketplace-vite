import Header from '@/components/Header'
import React, { useState } from 'react'
import carDetails from '../Shared/carDetails.json'
import InputField from './components/InputField'
import DropdownField from '@/add-listing/components/DropdownField'
import TextAreaField from './components/TextAreaField'
import { Separator } from '@radix-ui/react-select'
import features from '../Shared/features.json'
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from '@/components/ui/button'

const AddListing = () => {

    const [formData, setFormData] = useState([]);
    const handleInputChange = (name, value) => {
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }))
        console.log(formData)
    }


    const onSubmit =(e) =>{
        e.preventDefalult();
        console.log(formData);
    }


    return (
        <div>
            <Header />
            <div className='px-10 md:px-20 my-10'>
                <h2 className='font-bold text-4xl'>Add New Listing</h2>
                <form className='p-10 border rounded-xl mt-10'>
                    {/* Car Details */}
                    <div>
                        <h2 className='font-medium text-xl mb-6'>Car Details</h2>
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                            {carDetails.carDetails.map((item, index) => (
                                <div key={index}>
                                    <label >{item?.label}{item.required && <span className='text-red-500'>*</span>}</label>
                                    {item.fieldType == 'text' || item.fieldType == 'number'
                                        ? <InputField item={item} handleInputChange={handleInputChange} />
                                        : item.fieldType == 'dropdown' ? <DropdownField item={item} handleInputChange={handleInputChange} />
                                            : item?.fieldType == 'textarea' ? <TextAreaField item={item}
                                                handleInputChange={handleInputChange} />
                                                : null}

                                </div>
                            ))}
                        </div>
                    </div>

                    <hr className='my-6' />
                    {/* Feature List */}
                    <div>
                        <h2 className='font-medium text-xl my-6'>Features</h2>

                        <div className='grid grid-cols-2 md:grid-cols-3'>
                            {features.features.map((item, index) => (
                                <div key={index} className='flex gap-2 items-center'>
                                    <Checkbox
                                        onCheckedChange={(value) => handleInputChange(item.name, value)}
                                        className="border-gray-500" />  <h2>{item.label}</h2>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Car Images */}

                    <div className='mt-10 flex justify-end'>
                        <Button type="submit" onClick={(e) => onSubmit(e)}>Submit</Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddListing
