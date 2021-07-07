package com.courseproject.fanfic.models;
import javax.persistence.*;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Entity
@Table(name = "fanfics")
public class Fanfic {

  @Id
  @GeneratedValue(strategy = GenerationType.AUTO)
  private long id;

  @NotBlank
  @Size(min = 3)
  @Column(name = "title")
  private String title;

  @NotBlank
  @Size(min = 10)
  @Column(name = "description")
  private String description;

  @NotBlank
  @Size(min = 50)
  @Column(name = "fullpost")
  private String fullpost;

  @NotBlank
  @Size(min = 3)
  @Column(name = "tag")
  private String tag;

  @NotBlank
  @Size(min = 3)
  @Column(name = "fandom")
  private String fandom;



  public Fanfic() {
  }

  public Fanfic(String title, String description, String fullpost, String tag, String fandom) {
    this.title = title;
    this.description = description;
    this.fullpost = fullpost;
    this.tag = tag;
    this.fandom = fandom;
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


  public String getTag() {
    return tag;
  }

  public void setTag(String tag) {
    this.tag = tag;
  }

  public String getFandom() {
    return fandom;
  }

  public void setFandom(String fandom) {
    this.fandom = fandom;
  }

  @Override
  public String toString() {
    return "Fanfic{" +
      "id=" + id +
      ", title='" + title + '\'' +
      ", description='" + description + '\'' +
      ", fullpost='" + fullpost + '\'' +
      ", tag='" + tag + '\'' +
      ", fandom='" + fandom + '\'' +
      '}';
  }
}
