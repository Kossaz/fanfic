package com.courseproject.fanfic.models;

import javax.persistence.*;

@Entity
@Table(name = "roles")
public class Role {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;

	@Enumerated(EnumType.STRING)
	@Column(length = 20)
	private AllRoles name;

	public Role() {

	}

	public Role(AllRoles name) {
		this.name = name;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public AllRoles getName() {
		return name;
	}

	public void setName(AllRoles name) {
		this.name = name;
	}
}
