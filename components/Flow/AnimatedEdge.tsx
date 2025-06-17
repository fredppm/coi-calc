import React from 'react';
import { EdgeProps, getBezierPath, Edge } from 'reactflow';

/**
 * AnimatedEdge renders an edge with flowing particles of varying sizes to show resource flow direction.
 */
export const AnimatedEdge: React.FC<EdgeProps> = ({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  sourcePosition,
  targetPosition,
  style = {},
  markerEnd,
  label,
  labelStyle,
}) => {
  const [edgePath, labelX, labelY] = getBezierPath({
    sourceX,
    sourceY,
    sourcePosition,
    targetX,
    targetY,
    targetPosition,
  });

  return (
    <>
      {/* Main edge path */}
      <path
        id={id}
        style={style}
        className="react-flow__edge-path"
        d={edgePath}
        markerEnd={markerEnd}
      />
      
      {/* Animated particles with varying sizes and pulsing effects */}
      
      {/* Large particle - Heavy resources */}
      <circle fill={style.stroke || '#374151'} opacity="0.9">
        <animate attributeName="r" values="4;5;4" dur="2s" repeatCount="indefinite" />
        <animateMotion
          dur="4s"
          repeatCount="indefinite"
          path={edgePath}
        />
      </circle>
      
      {/* Medium particle 1 - Standard resources */}
      <circle r="3" fill={style.stroke || '#374151'} opacity="0.8">
        <animateMotion
          dur="4s"
          repeatCount="indefinite"
          path={edgePath}
          begin="0.8s"
        />
      </circle>
      
      {/* Small pulsing particle - Light resources */}
      <circle fill={style.stroke || '#374151'} opacity="0.7">
        <animate attributeName="r" values="1.5;2.5;1.5" dur="1.5s" repeatCount="indefinite" />
        <animateMotion
          dur="4s"
          repeatCount="indefinite"
          path={edgePath}
          begin="1.6s"
        />
      </circle>
      
      {/* Medium particle 2 - Standard resources */}
      <circle r="2.5" fill={style.stroke || '#374151'} opacity="0.6">
        <animateMotion
          dur="4s"
          repeatCount="indefinite"
          path={edgePath}
          begin="2.4s"
        />
      </circle>
      
      {/* Tiny rapid particle - Gas/Energy */}
      <circle fill={style.stroke || '#374151'} opacity="0.5">
        <animate attributeName="r" values="1;2;1" dur="1s" repeatCount="indefinite" />
        <animateMotion
          dur="4s"
          repeatCount="indefinite"
          path={edgePath}
          begin="3.2s"
        />
      </circle>
      
      {/* Extra large slow pulse - Very heavy resources */}
      <circle fill={style.stroke || '#374151'} opacity="0.4">
        <animate attributeName="r" values="3;6;3" dur="3s" repeatCount="indefinite" />
        <animateMotion
          dur="4s"
          repeatCount="indefinite"
          path={edgePath}
          begin="1.2s"
        />
      </circle>

      {/* Edge label */}
      {label && (
        <text
          x={labelX}
          y={labelY}
          style={labelStyle}
          className="react-flow__edge-text"
          textAnchor="middle"
          dominantBaseline="middle"
        >
          {label}
        </text>
      )}
    </>
  );
}; 