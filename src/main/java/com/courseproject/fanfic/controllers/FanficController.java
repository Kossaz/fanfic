package com.courseproject.fanfic.controllers;

import com.courseproject.fanfic.models.Fanfic;
import com.courseproject.fanfic.repository.FanficRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api")
public class FanficController {

  @Autowired
  FanficRepository fanficRepository;

  @GetMapping("/fanfics")
  public ResponseEntity<List<Fanfic>> getAllPosts(@RequestParam(required = false) String title) {
    try {
      List<Fanfic> Fanfics = new ArrayList<Fanfic>();

      if (title == null)
        fanficRepository.findAll().forEach(Fanfics::add);
      else
        fanficRepository.findByTitleContaining(title).forEach(Fanfics::add);

      if (Fanfics.isEmpty()) {
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
      }

      return new ResponseEntity<>(Fanfics, HttpStatus.OK);
    } catch (Exception e) {
      return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @GetMapping("/fanfics/{id}")
  public ResponseEntity<Fanfic> getPostById(@PathVariable("id") long id) {
    Optional<Fanfic> postData = fanficRepository.findById(id);

    if (postData.isPresent()) {
      return new ResponseEntity<>(postData.get(), HttpStatus.OK);
    } else {
      return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
  }

  @PostMapping("/fanfics")
  public ResponseEntity<Fanfic> createPost(@RequestBody Fanfic Fanfic) {
    try {
      Fanfic _fanfic = fanficRepository
        .save(new Fanfic(Fanfic.getTitle(), Fanfic.getDescription(), Fanfic.getFullpost(),  Fanfic.getFandom(), Fanfic.getTag()));
      return new ResponseEntity<>(_fanfic, HttpStatus.CREATED);
    } catch (Exception e) {
      return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @PutMapping("/fanfics/{id}/edit")
  public ResponseEntity<Fanfic> updatePost(@PathVariable("id") long id, @RequestBody Fanfic Fanfic) {
    Optional<Fanfic> postData = fanficRepository.findById(id);

    if (postData.isPresent()) {
      Fanfic _fanfic = postData.get();
      _fanfic.setTitle(Fanfic.getTitle());
      _fanfic.setDescription(Fanfic.getDescription());
      _fanfic.setFullpost(Fanfic.getFullpost());
      _fanfic.setFandom(Fanfic.getFandom());
      _fanfic.setTag(Fanfic.getTag());
      return new ResponseEntity<>(fanficRepository.save(_fanfic), HttpStatus.OK);
    } else {
      return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
  }

  @DeleteMapping("/fanfics/{id}/edit")
  public ResponseEntity<HttpStatus> deletePost(@PathVariable("id") long id) {
    try {
      fanficRepository.deleteById(id);
      return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    } catch (Exception e) {
      return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @DeleteMapping("/fanfics")
  public ResponseEntity<HttpStatus> deleteAllPosts() {
    try {
      fanficRepository.deleteAll();
      return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    } catch (Exception e) {
      return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
    }

  }

}
