export interface YogaPose {
  name: string;
  description: string;
  illustration: React.ReactNode;
  pairedWith?: string; // Name of the paired pose (if it's a sided pose)
}

// Import all SVG pose designs
// Single poses
import BridgePoseSVG from '../../imports/bridge_pose.svg';
import PlowPoseSVG from '../../imports/plow_pose.svg';
import UpwardPlankSVG from '../../imports/upward_plank.svg';
import ChairPoseSVG from '../../imports/chair_pose.svg';
import EaglePoseSVG from '../../imports/eagle_pose.svg';
import PalmTreeSVG from '../../imports/palm_tree.svg';
import BoatPoseSVG from '../../imports/boat.svg';
import PlankSVG from '../../imports/plank.svg';
import MountainPoseSVG from '../../imports/mountain_pose.svg';
import DownwardDogSVG from '../../imports/downward_dog.svg';
import ForwardFoldSVG from '../../imports/forward_fold.svg';
import ShoulderStandSVG from '../../imports/shoulder_stand.svg';
import ChildPoseSVG from '../../imports/child_pose.svg';
import CrossleggedPoseSVG from '../../imports/crosslegged_pose.svg';
import PigeonPoseSVG from '../../imports/pigeon_pose.svg';
import WideLeggedForwardFoldSVG from '../../imports/wide_legged_forward_fold-1.svg';

// Paired poses - Left side
import TreePoseLeftSVG from '../../imports/tree_pose_-_left.svg';
import DancerPoseLeftSVG from '../../imports/dancer_pose_-_left.svg';
import CrescentLungeLeftSVG from '../../imports/crescent_lundge_on_knee_-_left.svg';
import ThreeLeggedDogLeftSVG from '../../imports/three_legged_dog_-_left.svg';
import SupineFootToHeadLeftSVG from '../../imports/supine_foot_to_head_-_left.svg';
import SupportedShoulderStandLeftSVG from '../../imports/supported_shoulder_stand_-_left.svg';
import CrescentMoonLeftSVG from '../../imports/crescent_moon_-_left.svg';
import LungeLeftSVG from '../../imports/lunge_-_left.svg';

// Paired poses - Right side
import TreePoseRightSVG from '../../imports/tree_pose_-_right.svg';
import DancerPoseRightSVG from '../../imports/dancer_pose_-_right.svg';
import CrescentLungeRightSVG from '../../imports/crescent_lundge_on_knee_-_right.svg';
import ThreeLeggedDogRightSVG from '../../imports/three_legged_dog_-_right.svg';
import SupineFootToHeadRightSVG from '../../imports/supine_foot_to_head_-_right.svg';
import SupportedShoulderStandRightSVG from '../../imports/supported_shoulder_stand_-_right.svg';
import CrescentMoonRightSVG from '../../imports/crescent_moon_-_right.svg';
import LungeRightSVG from '../../imports/lunge_-_right.svg';

// All yoga poses
export const yogaPoses: YogaPose[] = [
  // Single poses (no pairing needed)
  {
    name: 'Bridge Pose',
    description: 'Lie on back, lift hips up, feet flat, knees bent',
    illustration: (
      <img src={BridgePoseSVG} alt="Bridge Pose" style={{ width: '200px', height: '200px', objectFit: 'contain' }} />
    ),
  },
  {
    name: 'Plow Pose',
    description: 'Lie on back, lift legs overhead, toes touch floor behind head',
    illustration: (
      <img src={PlowPoseSVG} alt="Plow Pose" style={{ width: '200px', height: '200px', objectFit: 'contain' }} />
    ),
  },
  {
    name: 'Upward Plank',
    description: 'Reverse plank position, lift hips high, press through hands and feet',
    illustration: (
      <img src={UpwardPlankSVG} alt="Upward Plank" style={{ width: '200px', height: '200px', objectFit: 'contain' }} />
    ),
  },
  {
    name: 'Chair Pose',
    description: 'Bend knees as if sitting in chair, arms reach overhead, weight in heels',
    illustration: (
      <img src={ChairPoseSVG} alt="Chair Pose" style={{ width: '200px', height: '200px', objectFit: 'contain' }} />
    ),
  },
  {
    name: 'Eagle Pose',
    description: 'Wrap one leg around the other, cross arms and bring palms together',
    illustration: (
      <img src={EaglePoseSVG} alt="Eagle Pose" style={{ width: '200px', height: '200px', objectFit: 'contain' }} />
    ),
  },
  {
    name: 'Palm Tree',
    description: 'Stand tall, arms reach overhead, rise onto toes',
    illustration: (
      <img src={PalmTreeSVG} alt="Palm Tree" style={{ width: '200px', height: '200px', objectFit: 'contain' }} />
    ),
  },
  {
    name: 'Boat',
    description: 'Balance on sitting bones, lift legs and torso, arms reach forward',
    illustration: (
      <img src={BoatPoseSVG} alt="Boat" style={{ width: '200px', height: '200px', objectFit: 'contain' }} />
    ),
  },
  {
    name: 'Plank',
    description: 'Hands and feet on mat, body in a straight line, hold position',
    illustration: (
      <img src={PlankSVG} alt="Plank" style={{ width: '200px', height: '200px', objectFit: 'contain' }} />
    ),
  },
  {
    name: 'Mountain Pose',
    description: 'Stand with feet together, arms at sides, back straight',
    illustration: (
      <img src={MountainPoseSVG} alt="Mountain Pose" style={{ width: '200px', height: '200px', objectFit: 'contain' }} />
    ),
  },
  {
    name: 'Downward Dog',
    description: 'Hands and feet on mat, lift hips high, form an inverted V shape',
    illustration: (
      <img src={DownwardDogSVG} alt="Downward Dog" style={{ width: '200px', height: '200px', objectFit: 'contain' }} />
    ),
  },
  {
    name: 'Forward Fold',
    description: 'Stand with feet together, bend forward, hands reach toward feet',
    illustration: (
      <img src={ForwardFoldSVG} alt="Forward Fold" style={{ width: '200px', height: '200px', objectFit: 'contain' }} />
    ),
  },
  {
    name: 'Shoulder Stand',
    description: 'Lie on back, lift legs straight up, hands support lower back',
    illustration: (
      <img src={ShoulderStandSVG} alt="Shoulder Stand" style={{ width: '200px', height: '200px', objectFit: 'contain' }} />
    ),
  },
  {
    name: 'Child Pose',
    description: 'Kneel on mat, sit back on heels, arms reach forward, forehead on mat',
    illustration: (
      <img src={ChildPoseSVG} alt="Child Pose" style={{ width: '200px', height: '200px', objectFit: 'contain' }} />
    ),
  },
  {
    name: 'Crosslegged Pose',
    description: 'Sit with legs crossed, hands on knees, back straight',
    illustration: (
      <img src={CrossleggedPoseSVG} alt="Crosslegged Pose" style={{ width: '200px', height: '200px', objectFit: 'contain' }} />
    ),
  },
  {
    name: 'Pigeon Pose',
    description: 'One leg folded in front, other leg extended back, fold forward',
    illustration: (
      <img src={PigeonPoseSVG} alt="Pigeon Pose" style={{ width: '200px', height: '200px', objectFit: 'contain' }} />
    ),
  },
  {
    name: 'Wide Legged Forward Fold',
    description: 'Stand with feet wide apart, bend forward, hands on mat',
    illustration: (
      <img src={WideLeggedForwardFoldSVG} alt="Wide Legged Forward Fold" style={{ width: '200px', height: '200px', objectFit: 'contain' }} />
    ),
  },

  // Paired poses (Left/Right sides)
  {
    name: 'Tree Pose - Left',
    description: 'Balance on left leg, right foot on inner thigh, hands at heart center',
    illustration: (
      <img src={TreePoseLeftSVG} alt="Tree Pose - Left" style={{ width: '200px', height: '200px', objectFit: 'contain' }} />
    ),
    pairedWith: 'Tree Pose - Right',
  },
  {
    name: 'Tree Pose - Right',
    description: 'Balance on right leg, left foot on inner thigh, hands at heart center',
    illustration: (
      <img src={TreePoseRightSVG} alt="Tree Pose - Right" style={{ width: '200px', height: '200px', objectFit: 'contain' }} />
    ),
    pairedWith: 'Tree Pose - Left',
  },
  {
    name: 'Dancer Pose - Left',
    description: 'Balance on left leg, reach back to hold right foot, extend left arm forward',
    illustration: (
      <img src={DancerPoseLeftSVG} alt="Dancer Pose - Left" style={{ width: '200px', height: '200px', objectFit: 'contain' }} />
    ),
    pairedWith: 'Dancer Pose - Right',
  },
  {
    name: 'Dancer Pose - Right',
    description: 'Balance on right leg, reach back to hold left foot, extend right arm forward',
    illustration: (
      <img src={DancerPoseRightSVG} alt="Dancer Pose - Right" style={{ width: '200px', height: '200px', objectFit: 'contain' }} />
    ),
    pairedWith: 'Dancer Pose - Left',
  },
  {
    name: 'Crescent Lunge on Knee - Left',
    description: 'Left knee on mat, right leg forward with knee bent, arms reach overhead',
    illustration: (
      <img src={CrescentLungeLeftSVG} alt="Crescent Lunge on Knee - Left" style={{ width: '200px', height: '200px', objectFit: 'contain' }} />
    ),
    pairedWith: 'Crescent Lunge on Knee - Right',
  },
  {
    name: 'Crescent Lunge on Knee - Right',
    description: 'Right knee on mat, left leg forward with knee bent, arms reach overhead',
    illustration: (
      <img src={CrescentLungeRightSVG} alt="Crescent Lunge on Knee - Right" style={{ width: '200px', height: '200px', objectFit: 'contain' }} />
    ),
    pairedWith: 'Crescent Lunge on Knee - Left',
  },
  {
    name: 'Three Legged Dog - Left',
    description: 'From downward dog, lift left leg high, keeping hips square',
    illustration: (
      <img src={ThreeLeggedDogLeftSVG} alt="Three Legged Dog - Left" style={{ width: '200px', height: '200px', objectFit: 'contain' }} />
    ),
    pairedWith: 'Three Legged Dog - Right',
  },
  {
    name: 'Three Legged Dog - Right',
    description: 'From downward dog, lift right leg high, keeping hips square',
    illustration: (
      <img src={ThreeLeggedDogRightSVG} alt="Three Legged Dog - Right" style={{ width: '200px', height: '200px', objectFit: 'contain' }} />
    ),
    pairedWith: 'Three Legged Dog - Left',
  },
  {
    name: 'Supine Foot to Head - Left',
    description: 'Lie on back, bring left knee to chest, reach for left foot with both hands',
    illustration: (
      <img src={SupineFootToHeadLeftSVG} alt="Supine Foot to Head - Left" style={{ width: '200px', height: '200px', objectFit: 'contain' }} />
    ),
    pairedWith: 'Supine Foot to Head - Right',
  },
  {
    name: 'Supine Foot to Head - Right',
    description: 'Lie on back, bring right knee to chest, reach for right foot with both hands',
    illustration: (
      <img src={SupineFootToHeadRightSVG} alt="Supine Foot to Head - Right" style={{ width: '200px', height: '200px', objectFit: 'contain' }} />
    ),
    pairedWith: 'Supine Foot to Head - Left',
  },
  {
    name: 'Supported Shoulder Stand - Left',
    description: 'From shoulder stand, lower left leg overhead toward floor',
    illustration: (
      <img src={SupportedShoulderStandLeftSVG} alt="Supported Shoulder Stand - Left" style={{ width: '200px', height: '200px', objectFit: 'contain' }} />
    ),
    pairedWith: 'Supported Shoulder Stand - Right',
  },
  {
    name: 'Supported Shoulder Stand - Right',
    description: 'From shoulder stand, lower right leg overhead toward floor',
    illustration: (
      <img src={SupportedShoulderStandRightSVG} alt="Supported Shoulder Stand - Right" style={{ width: '200px', height: '200px', objectFit: 'contain' }} />
    ),
    pairedWith: 'Supported Shoulder Stand - Left',
  },
  {
    name: 'Crescent Moon - Left',
    description: 'From standing, lean to the left, right arm reaches overhead',
    illustration: (
      <img src={CrescentMoonLeftSVG} alt="Crescent Moon - Left" style={{ width: '200px', height: '200px', objectFit: 'contain' }} />
    ),
    pairedWith: 'Crescent Moon - Right',
  },
  {
    name: 'Crescent Moon - Right',
    description: 'From standing, lean to the right, left arm reaches overhead',
    illustration: (
      <img src={CrescentMoonRightSVG} alt="Crescent Moon - Right" style={{ width: '200px', height: '200px', objectFit: 'contain' }} />
    ),
    pairedWith: 'Crescent Moon - Left',
  },
  {
    name: 'Lunge - Left',
    description: 'Left foot forward with knee bent, right leg extended back, hands on hips',
    illustration: (
      <img src={LungeLeftSVG} alt="Lunge - Left" style={{ width: '200px', height: '200px', objectFit: 'contain' }} />
    ),
    pairedWith: 'Lunge - Right',
  },
  {
    name: 'Lunge - Right',
    description: 'Right foot forward with knee bent, left leg extended back, hands on hips',
    illustration: (
      <img src={LungeRightSVG} alt="Lunge - Right" style={{ width: '200px', height: '200px', objectFit: 'contain' }} />
    ),
    pairedWith: 'Lunge - Left',
  },
];
