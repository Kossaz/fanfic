package com.courseproject.fanfic.repository;

import com.courseproject.fanfic.models.Fanfic;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface FanficRepository extends JpaRepository<Fanfic, Long> {
  List<Fanfic> findByTitleContaining(String title);
}
