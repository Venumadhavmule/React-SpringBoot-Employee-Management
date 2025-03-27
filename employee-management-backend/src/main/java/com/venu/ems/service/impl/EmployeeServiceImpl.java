package com.venu.ems.service.impl;

import org.springframework.stereotype.Service;

import com.venu.ems.dto.EmployeeDto;
import com.venu.ems.entity.Employee;
import com.venu.ems.mapper.EmployeeMapper;
import com.venu.ems.repository.EmployeeRepository;
import com.venu.ems.service.EmployeeService;

import lombok.AllArgsConstructor;

@Service
@AllArgsConstructor
public class EmployeeServiceImpl implements EmployeeService {

	private EmployeeRepository employeeRepository;

	@Override
	public EmployeeDto createEmployee(EmployeeDto employeeDto) {

		Employee employee = EmployeeMapper.mapToEmployee(employeeDto);

		Employee savedEMployee = employeeRepository.save(employee);

		return EmployeeMapper.mapToEmployeeDto(savedEMployee);
	}
}
