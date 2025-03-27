package com.venu.ems.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.venu.ems.entity.Employee;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {
}
