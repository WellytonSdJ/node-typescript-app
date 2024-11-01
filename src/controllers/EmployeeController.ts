import { RequestHandler } from "express"
import { EmployeeModel } from "../db"

class EmployeeController {

  getAllEmployee: RequestHandler = async (req, res): Promise<void> => {
    try {
      const employees = await EmployeeModel.find()
      res.status(200).json({ data: employees })
    } catch (error) {
      res.sendStatus(400)
    }
  }

  getEmployee: RequestHandler = async (req, res): Promise<void> => {
    try {
      const { id } = req.params
      const employee = await EmployeeModel.findById(id)
      res.status(200).json({ data: employee })
    } catch (error) {
      res.sendStatus(400)
    }
  }

  createEmployee: RequestHandler = async (req, res): Promise<void> => {
    try {
      const { name, email, mobile, dob } = req.body
      const employee = new EmployeeModel({
        name,
        email,
        mobile,
        dob,
      })
      await employee.save()
      res.status(201).json({ message: 'Employee Created', data: employee })
    } catch (error) {
      res.sendStatus(400)
    }
  }

  updateEmployee: RequestHandler = async (req, res): Promise<void> => {
    try {
      const { id } = req.params
      const { name, email, mobile, dob } = req.body

      const employee = await EmployeeModel.findById(id)
      if (employee) {
        employee.name = name;
        employee.email = email;
        employee.mobile = mobile;
        employee.dob = dob;

        await employee.save()
        res.status(200).json({ message: 'Employee Updated', data: employee })
      }
      res.status(400)
    } catch (error) {
      res.sendStatus(400)
    }
  }

  deleteEmployee: RequestHandler = async (req, res): Promise<void> => {
    try {
      const { id } = req.params
      const employee = await EmployeeModel.findByIdAndDelete({ _id: id })
      res.status(200).json({ message: "Employee Deleted" })
    } catch (error) {
      res.sendStatus(400)
    }
  }

}

export default new EmployeeController()