package com.courseproject.fanfic.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.courseproject.fanfic.models.AllRoles;
import com.courseproject.fanfic.models.Role;

@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {
	Optional<Role> findByName(AllRoles name);
}
