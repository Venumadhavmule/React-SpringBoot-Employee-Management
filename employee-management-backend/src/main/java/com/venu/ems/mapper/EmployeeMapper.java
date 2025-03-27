package com.venu.ems.mapper;

import org.modelmapper.ModelMapper;

import com.venu.ems.dto.EmployeeDto;
import com.venu.ems.entity.Employee;

public class EmployeeMapper {

	private static final ModelMapper modelMapper = new ModelMapper();

	public static EmployeeDto mapToEmployeeDto(Employee employee) {
		return modelMapper.map(employee, EmployeeDto.class);
	}

	public static Employee mapToEmployee(EmployeeDto employeeDto) {
		return modelMapper.map(employeeDto, Employee.class);
	}
}
