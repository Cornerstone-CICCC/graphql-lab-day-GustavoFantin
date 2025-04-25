import { Customer } from "../models/customer.model"
import { ICustomer } from "../types/customer.types"

const getCustomers = async () => {
    const customers = await Customer.find()
    return customers
}

const createCustomer = async (data: Omit<ICustomer, 'id'>) => {
    const newCustomer = new Customer(data)
    return await newCustomer.save()
}

const getCustomerById = async (id: string) => {
    return await Customer.findById(id)
}

const updateCustomer = async (id: string, data: Partial<ICustomer>) => {
    return await Customer.findByIdAndUpdate(id, data, { new: true })
}

const deleteCustomer = async (id: string) => {
    return await Customer.findByIdAndDelete(id)
}

export default {
    getCustomers,
    createCustomer,
    getCustomerById,
    updateCustomer,
    deleteCustomer,
}