export const followUnfollowFlow = async (dispatch, userId, apiMethod, actionCreator, toggleFollowingAC) => {
  dispatch(toggleFollowingAC(true, userId))
  const data = await apiMethod(userId)

  if (data.resultCode === 0) {
    dispatch(actionCreator(userId))
  }
  dispatch(toggleFollowingAC(false, userId))
}

export const updateObjInArray = (items, itemId, objPropName, newObjProps) => {
  return items.map(item => {
    if (item[objPropName] === itemId) {
      return {...item, ...newObjProps}
    }
    return item
  })
}
