// getOrders
//     - createOrder(productId, customerId)
//     - updateOrder(id, data)
//     - deleteOrder(id)
import { Order } from "../models/order.model";
import { IOrders } from "../types/order.types";

const getOrders = async () => {
    const orders = await Order.find()
    return orders
}

const createOrder = async (data: Omit<IOrders, 'id'>) => {
    const newOrder = new Order(data)
    return await newOrder.save()
}

const updateOrder = async (id: string, data: Partial<IOrders>) => {
    return await Order.findByIdAndUpdate(id, data, { new: true })
}

const deleteOrder = async (id: string) => {
    return await Order.findByIdAndDelete(id)
}

export default {
    getOrders,
    createOrder,
    updateOrder,
    deleteOrder
}