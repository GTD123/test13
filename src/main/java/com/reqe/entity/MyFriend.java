package com.reqe.entity;

public class MyFriend {
    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column myfriend.id
     *
     * @mbggenerated
     */
    private Integer id;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column myfriend.name
     *
     * @mbggenerated
     */
    private String name;

    /**
     * This field was generated by MyBatis Generator.
     * This field corresponds to the database column myfriend.age
     *
     * @mbggenerated
     */
    private Integer age;

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column myfriend.id
     *
     * @return the value of myfriend.id
     *
     * @mbggenerated
     */
    public Integer getId() {
        return id;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column myfriend.id
     *
     * @param id the value for myfriend.id
     *
     * @mbggenerated
     */
    public void setId(Integer id) {
        this.id = id;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column myfriend.name
     *
     * @return the value of myfriend.name
     *
     * @mbggenerated
     */
    public String getName() {
        return name;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column myfriend.name
     *
     * @param name the value for myfriend.name
     *
     * @mbggenerated
     */
    public void setName(String name) {
        this.name = name == null ? null : name.trim();
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method returns the value of the database column myfriend.age
     *
     * @return the value of myfriend.age
     *
     * @mbggenerated
     */
    public Integer getAge() {
        return age;
    }

    /**
     * This method was generated by MyBatis Generator.
     * This method sets the value of the database column myfriend.age
     *
     * @param age the value for myfriend.age
     *
     * @mbggenerated
     */
    public void setAge(Integer age) {
        this.age = age;
    }
}