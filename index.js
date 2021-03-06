const Vec3 = require('vec3').Vec3
const util = require('util')
const EventEmitter = require('events').EventEmitter

module.exports = Entity

function Entity (id) {
  EventEmitter.call(this)
  this.id = id
  this.type = null
  this.position = new Vec3(0, 0, 0)
  this.velocity = new Vec3(0, 0, 0)
  this.yaw = 0
  this.pitch = 0
  this.onGround = true
  this.height = 0
  this.effects = {}
  // 0 = held item, 1 = off hand, 2-5 = armor slot
  this.equipment = new Array(6)
  this.heldItem = this.equipment[0] // shortcut to equipment[0]
  this.isValid = true
  this.metadata = []
  this.effects = [];
  this.vehicle = null;
  this.passengers = [];
  this.holder = null;
}
util.inherits(Entity, EventEmitter)

Entity.prototype.setEquipment = function (index, item) {
  this.equipment[index] = item
  this.heldItem = this.equipment[0]
}
