import React, { useState, useEffect, useCallback } from 'react'
import {
  Animated,
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native'
import PropTypes from 'prop-types'

const shadow = {
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 4,
  },
  shadowOpacity: 0.3,
  shadowRadius: 4.65,
  elevation: 8,
}

const width = Dimensions.get('screen').width - 72

const SegmentedControls = ({
  tabs,
  onChange,
  currentIndex,
  segmentedControlsBackgroundColor,
  paddingVertical,
  activeSegmentBackgroundColor,
  textColor,
  activeTextColor,
}) => {
  const translateValue = (width - 4) / tabs.length
  const [tabTranslate] = useState(new Animated.Value(0))

  const memoizedTabPressCallback = useCallback((index) => {
    onChange(index)
  }, [])

  useEffect(() => {
    Animated.spring(tabTranslate, {
      toValue: currentIndex * translateValue,
      stiffness: 180,
      damping: 25,
      useNativeDriver: true,
    }).start()
  }, [currentIndex])

  return (
    <Animated.View
      style={[
        styles.wrapper,
        {
          backgroundColor: segmentedControlsBackgroundColor,
          paddingVertical,
        },
      ]}
    >
      <Animated.View
        style={[
          styles.activeSegment,
          {
            width: (width - 4) / tabs.length,
            backgroundColor: activeSegmentBackgroundColor,
            transform: [
              {
                translateX: tabTranslate,
              },
            ],
          },
        ]}
      ></Animated.View>
      {tabs.map((tab, index) => {
        const isCurrentIndex = currentIndex === index
        return (
          <TouchableOpacity
            style={[styles.textWrapper]}
            key={index}
            activeOpacity={0.7}
            onPress={() => memoizedTabPressCallback(index)}
          >
            <Text
              numberOfLines={1}
              style={[
                styles.text,
                { color: textColor },
                isCurrentIndex && { color: activeTextColor },
              ]}
            >
              {tab}
            </Text>
          </TouchableOpacity>
        )
      })}
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    borderRadius: 16,
    width,
    marginVertical: 20,
  },
  activeSegment: {
    ...StyleSheet.absoluteFill,
    position: 'absolute',
    top: 0,
    marginHorizontal: 2,
    borderRadius: 16,
    ...shadow,
  },
  textWrapper: {
    flex: 1,
    elevation: 9,
    paddingHorizontal: 5,
  },
  text: {
    fontSize: 18,
    textAlign: 'center',
    fontWeight: '600',
  },
})

SegmentedControls.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChange: PropTypes.func.isRequired,
  currentIndex: PropTypes.number.isRequired,
  segmentedControlBackgroundColor: PropTypes.string,
  activeSegmentBackgroundColor: PropTypes.string,
  textColor: PropTypes.string,
  activeTextColor: PropTypes.string,
  paddingVertical: PropTypes.number,
}

SegmentedControls.defaultProps = {
  tabs: [],
  onChange: () => {},
  currentIndex: 0,
  segmentedControlBackgroundColor: '#E5E5EA',
  activeSegmentBackgroundColor: 'white',
  textColor: 'black',
  activeTextColor: 'black',
  paddingVertical: 12,
}

export default SegmentedControls
