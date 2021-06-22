package com.courseproject.fanfic.models;
import javax.persistence.*;



@Entity
@Table(name = "posts")
public class Post {

  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private long id;

  @Column(name = "title")
  private String title;

  @Column(name = "description")
  private String description;

  @Column(name = "fullpost")
  private String fullpost;

  @Column(name = "published")
  private boolean published;

  public Post() {
  }


  public Post(String title, String description, String fullpost, boolean published) {
    this.title = title;
    this.description = description;
    this.fullpost = fullpost;
    this.published = published;
  }

  public long getId() {
    return id;
  }

  public void setId(long id) {
    this.id = id;
  }

  public String getTitle() {
    return title;
  }

  public void setTitle(String title) {
    this.title = title;
  }

  public String getDescription() {
    return description;
  }

  public void setDescription(String description) {
    this.description = description;
  }

  public String getFullpost() {
    return fullpost;
  }

  public void setFullpost(String fullpost) {
    this.fullpost = fullpost;
  }

  public boolean isPublished() {
    return published;
  }

  public void setPublished(boolean published) {
    this.published = published;
  }
  @Override
  public String toString() {
    return "Post [id=" + id + ", title=" + title + ", desc=" + description + ", fullpost=" + fullpost + ", published=" + published + "]";
  }
}
