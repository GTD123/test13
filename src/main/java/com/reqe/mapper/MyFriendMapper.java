package com.reqe.mapper;

import com.reqe.entity.MyFriend;

public interface MyFriendMapper {
    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table myfriend
     *
     * @mbggenerated
     */
    int deleteByPrimaryKey(Integer id);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table myfriend
     *
     * @mbggenerated
     */
    int insert(MyFriend record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table myfriend
     *
     * @mbggenerated
     */
    int insertSelective(MyFriend record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table myfriend
     *
     * @mbggenerated
     */
    MyFriend selectByPrimaryKey(Integer id);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table myfriend
     *
     * @mbggenerated
     */
    int updateByPrimaryKeySelective(MyFriend record);

    /**
     * This method was generated by MyBatis Generator.
     * This method corresponds to the database table myfriend
     *
     * @mbggenerated
     */
    int updateByPrimaryKey(MyFriend record);
}